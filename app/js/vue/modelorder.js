/**
 * Created by MrAmiD
 */

/*
* Для бэкенда
* 1) Если orderInfo.city != selDelCity, то доставка транспортной компанией orderInfo.transportCompanyInfo
* 2) У #order-btn в параметре data-order находится номер заказа.
* 3)
* */

$(function() {
    var app = new Vue({
        el: '#vueCont',
        data: {
            orderInfo: {
                name: '',//Имя клиента
                clientType: 'fizik',//fizik or urik
                email: '',//email клиента
                phone: '',//телефон клиента
                city: 'Екатеринбург',//Город клиента
                deliveryType: 'Доставка курьером',//тип доставки('Самовывоз', 'Доставка курьером')
                deliveryHouse: false, // Доставка до дома (курьером)
                files: [],//прикрепленные файлы
                deliveryAdress: { //адрес доставки
                    street: '',//улица
                    lit: '',//корпус
                    house: '',//дом
                    apartament: ''//квартира
                },
                transportCompanyInfo: {
                    address: '', // адрес самовывоза
                    companyName: '', // Название транспортной компании
                },
                addressCompany: 'с 10.00 до 19.00. Адрес: г. Екатеринбург, ул. Предельная, 57, литер Ч.',
                deliveryDate: '',
                commentClient: '',
                paymentType: 'Картой' // Способ оплаты,
            },
            stepType: 'contactInfo',
            deliveryCheckMode: false,
            selDelCity: 'Екатеринбург'.toUpperCase() //Местоположение офиса компании alarmTrade, город с которым идёт сравнение для вывода блока самовывоза, в шаблоне
        }, 
        computed: {
            deliveryHouse: function (){ // Есть доставка курьером, до дома

                var str = this.orderInfo.transportCompanyInfo.companyName;
                var result = str.match( /пункт/i ); /// Если есть слово "пункт"


                // if(result !== null){
                //     return false;
                // }

                if(!str){ // Если поле this.orderInfo.transportCompanyInfo.companyName не заполнено
                    result = false;
                }else {
                    result = result !== null;
                }

                console.log('result1 = ', result);

                if(this.orderInfo.deliveryHouse || result){
                    return true;
                }

                console.log('result2 = ', result);

                return result;
            },
            //Для блока доставки, скрывать/показывать блоки show*
            /*
            * 1) Выберите способ доставки (ёбург) - showChoiceDelOfice
            * 2) Адрес Самовывоза (Ёбург) - showSelfOfice
            * 3) Транспортная компания - showTransCompany
            * 4) Адрес доставки - showInputsSelfDelivery
            * 5) Добавить комментарий - showComment
            * 6) Выберите дату - showDate
            * 7) Адрес самовывоза: (пункты выдачи) - showDelPoints
            * */
            showDelPoints: function () {
                var str = this.orderInfo.transportCompanyInfo.companyName;
                var result = str.match( /пункт/i ); /// Если есть слово "пункт"

                if(result !== null && this.orderInfo.city.toUpperCase() != this.selDelCity.toUpperCase()){
                    return true;
                }else {
                    return false;
                }
            },
            showDate: function () {
              if( (   this.showInputsSelfDelivery
                  || this.showTransCompany
                  || this.showSelfOfice)){
                  return true;
              }else {
                  return false;
              }
            },
            showComment: function () {
                if(this.deliveryHouse){
                    return true;
                }else {
                    return false;
                }
            },
            showTransCompany: function () {

                if(this.orderInfo.city.toUpperCase() != this.selDelCity.toUpperCase()){
                    return true;
                }else {
                    return false;
                }
            },
            showChoiceDelOfice: function () {
                if(this.orderInfo.city.toUpperCase() == this.selDelCity.toUpperCase()){
                    return true;
                }else {
                    return false;
                }
            },
            showSelfOfice: function () {
                if(this.orderInfo.deliveryType == 'Самовывоз'
                    && this.orderInfo.city.toUpperCase() == this.selDelCity){
                    return true;
                }else {
                    return false;
                }
            },
            showInputsSelfDelivery: function () {
                if( (this.orderInfo.deliveryHouse
                    && this.deliveryHouse
                    && !this.showDelPoints) || !this.showSelfOfice
                   )
                {
                    return true;
                } else {
                    return false;
                }
            }
        },
        methods: {
            setPaymentType: function (value) {
                console.log('sss');
                this.orderInfo.paymentType = value;
            },
            getActiveStep: function (value) {
                if(value == this.stepType){
                    return 'active';
                }else {
                    return '';
                }
            },
            changeSteps: function () {
                $('.basket-order-i .tab-c button').removeClass('active');
                $('.steps-c .step-i').removeClass('active');
                $('.steps-c .step-i').eq($(this).index()).addClass('active');
                $(this).addClass('active');
            },
            changeDelivery: function (selectedCity) {
                this.orderInfo.city = selectedCity;

                if(selectedCity.toUpperCase() != this.selDelCity.toUpperCase()){
                    this.orderInfo.deliveryType = 'Доставка курьером';
                    this.orderInfo.deliveryHouse = true;
                }

                if(selectedCity.toUpperCase() == this.selDelCity.toUpperCase() && this.orderInfo.deliveryHouse){
                    $('#taxDel').click()
                }

            },
            changeModel: function (elem) {
                var splitArr = elem.data().model.split('.');
                if(splitArr.length == 1){
                    this.orderInfo[elem.data().model] = elem.val();
                }else {
                    if(splitArr[splitArr.length - 1] == 'companyName'){
                        this.orderInfo.transportCompanyInfo.companyName = elem.val();
                    }
                }
            },
            previewFiles: function() {
                this.orderInfo.files = this.$refs.myFiles.files;
            },
            validTxtInput: function (selector) {
                if($(selector).val().length >= 1){
                    $(selector).removeClass('notValid');
                    return true;
                } else {
                    $(selector).addClass('notValid');
                    return false;
                }
            },
            validPhoneInput: function (selector) {
                if($(selector).val().length == 17){
                    $(selector).removeClass('notValid');
                    return true;
                } else {
                    $(selector).addClass('notValid');
                    return false;
                }
            },
            //Проверка валидности шага "Способ доставки для Ёбурга"
            getPermDeliveryValid: function () {
                console.log('getPermDeliveryValid start');
                if(this.orderInfo.city.toUpperCase() == this.selDelCity.toUpperCase()){
                    if(!this.showSelfOfice){
                        return (this.validTxtInput('#street')
                        && this.validTxtInput('#lit')
                        && this.validTxtInput('#house')
                        && this.validTxtInput('#apartament')
                        && this.validTxtInput('.delivery-step .datepicker-here'));
                    }
                    else {
                        return this.validTxtInput('.delivery-step .datepicker-here');
                    }
                }else {
                    return true;
                }
            },
            getNotPermDeliveryValid: function () {
                this.deliveryCheckMode = true;
                if(this.orderInfo.city.toUpperCase() != this.selDelCity.toUpperCase()){

                    if(!this.showDelPoints){
                        return (this.validTxtInput('#street')
                            && this.validTxtInput('#lit')
                            && this.validTxtInput('#house')
                            && this.validTxtInput('#apartament')
                            && this.validTxtInput('.delivery-step .datepicker-here')
                            && !(this.deliveryCheckMode == true && !this.orderInfo.transportCompanyInfo.companyName)
                        );
                    } else {
                        return this.validTxtInput('.delivery-step .datepicker-here');
                    }

                }else {
                    return true;
                }

            },

            changeStepType: function (value, event) {

                if(value != 'contactInfo'){
                    if(!this.validTxtInput('#clientName')
                        || !this.validPhoneInput('#clientPhone')
                        || !this.validTxtInput('#clientEmail')){
                        return;
                    }
                }

                if (value != 'deliveryInfo'){
                    if(!this.getPermDeliveryValid() || !this.getNotPermDeliveryValid()){
                        return false;
                    }
                }

                if(value == 'getOrder'){ // Оформление заказа
                    $('.title-page').text('Ваш заказ № ' + $('#order-btn').data().order )
                }else {
                    $('.title-page').text('Оформление заказа')

                }

                this.stepType = value;
            },
            initStyler: function () {
                $('.vue-input, .vue-select').styler({});
            },
            initCalendar: function () {//Календарь для выбора даты
                var varthis = this;
                var now = new Date();
                var minDate = new Date(new Date().getTime() + 30 * 60 * 1000);//now +30 минут
                var maxDate = new Date();
                maxDate.setDate(maxDate.getDate()+30);//now + 30 day
                var datetime = $('.datepicker-here').datepicker({
                    dateFormat : 'dd.mm.yyyy',
                    minDate: minDate,
                    maxDate: maxDate,
                    onSelect: function(fd, d, picker) {
                        console.log('dateSelected');
                        varthis.orderInfo.deliveryDate = $('.datepicker-here').val();

                    }
                });
            }
        },
        watch: {
            'orderInfo.transportCompanyInfo.companyName': function () {
                var varthis = this;
                setTimeout(function () {
                    varthis.orderInfo.transportCompanyInfo.address =  $('.group-inpt.transport-c.active select').val();
                }, 100);
            }
        },
        mounted: function () {
            var varthis = this;
            this.initStyler();
            //Обработка нажатия на стилизованные чекбоксы/радиобатоны
            $(document).on('click', '.jq-radio.vue-input', function () {
                var elem = $(this).children('.vue-input');
                varthis.changeModel(elem);
            });
            $(document).on('click', '.i-group label', function () {
                var elem = $('#' + $(this).attr('for'));
                varthis.changeModel(elem);
            });

            //Отслеживаем изменение select в блоке "Оформление заказа"
            varthis.changeDelivery(localStorage.getItem("clientCity"));
            // $('#city-selectSteps').change(function () {
            //     var selectedCity = $(this).val().toUpperCase();
            //     varthis.changeDelivery(selectedCity);
            // });

            $('.js-setCity').bind("DOMSubtreeModified",function(){
                var selectedCity = $(this).text().toUpperCase();
                varthis.changeDelivery(selectedCity);
            });




            $('.transportAddress').change(function () {
                if($(this).val().toUpperCase() != ''){
                    varthis.orderInfo.transportCompanyInfo.address = $(this).val().toUpperCase();
                }
            });

            setTimeout(function () {
                varthis.orderInfo.transportCompanyInfo.address =  $('.group-inpt.transport-c.active select').val();
            }, 1000);

            this.initCalendar();

            //Показываем vue после того как всё отрендерится
            $('#vueCont').css({"opacity": '1'});
        },

    })
});
