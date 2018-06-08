/**
 * Created by MrAmiD
 */


$(function() {
    var app = new Vue({
        el: '#vueCont',
        data: {
            orderInfo: {
                name: '',//Имя клиента
                clientType: 'fizik',//fizik or urik
                email: '',//email клиента
                phone: '',//телефон клиента
                city: 'Пермь',//Город клиента
                deliveryType: 'Доставка курьером',//тип доставки(самовывоз/ транспортная компания/ ...)
                files: [],//прикрепленные файлы
                deliveryAdress: { //адрес доставки
                    street: '',//улица
                    lit: '',//корпус
                    house: '',//дом
                    apartament: ''//квартира
                },
                deliveryDate: '',
                commentClient: ''
            },
            stepType: 'deliveryInfo'
        }, 
        computed: {

        },
        methods: {
            changeSteps: function () {
                $('.basket-order-i .tab-c button').removeClass('active');
                $('.steps-c .step-i').removeClass('active');
                $('.steps-c .step-i').eq($(this).index()).addClass('active');
                $(this).addClass('active');
            },
            changeDelivery: function (selectedCity) {
                this.orderInfo.city = selectedCity;
            },
            changeModel: function (elem) {
                this.orderInfo[elem.data().model] = elem.val();
            },
            previewFiles: function() {
                this.orderInfo.files = this.$refs.myFiles.files;
            },
            changeStepType: function (value, event) {
                this.stepType = value;
                $('.basket-order-i .tab-c button').removeClass('active');
                $('.steps-c .step-i').removeClass('active');
                $('.steps-c .step-i').eq($(this).index()).addClass('active');
                if(event){
                    $(event.currentTarget).addClass('active');
                }
            },
            initStyler: function () {
                $('.vue-input, .vue-select').styler({});
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

            //Отслеживаем изменение города в блоке "Оформление заказа"
            varthis.changeDelivery($('#city-selectSteps').val());
            $('#city-selectSteps').change(function () {
                var selectedCity = $(this).val().toUpperCase();
                varthis.changeDelivery(selectedCity);
            });

            //Календарь для выбора даты
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

            //Показываем vue после того как всё отрендерится
            $('#vueCont').css({"opacity": '1'});
        }
    })
});
