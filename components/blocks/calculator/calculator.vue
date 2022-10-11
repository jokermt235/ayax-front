<script>
// import veeno from 'veeno'; 
// import VueSlider from 'vue-slider-component'
// import 'vue-slider-component/theme/default.css'
import wNumb from 'wnumb'
import VueMask from 'v-mask'
Vue.use(VueMask)

export default {
  components: {
    //   veeno
    // VueSlider
    VueMask,
    wNumb
    },
    // props: {
    // },
    //  computed: {
    // },


    data() {
        return {
            // sliderRange: [0, 50],
            myInputModel: ''
        }
    },
    methods: {
    },
    mounted() {
'use strict';
var MortgageCalculator = function (formID, AB) {
    var self = this;

    // $('.calc-form input[type="text"]').mask('+7(999)999-99-99');

    self.form = document.getElementById(formID);

    self.inputs = {
        firstPay     : document.getElementById('firstPay'),
        objectPrice  : document.getElementById('objectPrice'),
        creditTerm   : document.getElementById('creditTerm'),
        interestRate : document.getElementById('interestRate')
    };

    self.sliders = {
        priceRange   : document.getElementById('priceRange'),
        dateRange    : document.getElementById('dateRange'),
        percentRange : document.getElementById('percentRange')
    };

    self.moneyFormat = wNumb({
        mark     : '',
        thousand : ' '
    });

    self.params = {
        price        : {},
        creditTerm   : {},
        interestRate : {}
    };

    this.setValues = function() {
        //priceRange dataset
        self.params.price.min = parseInt(self.sliders.priceRange.dataset.min) || 100000;
        self.params.price.max = parseInt(self.sliders.priceRange.dataset.max) || 60000000;
        self.inputs.firstPay.value = parseInt(self.sliders.priceRange.dataset.start) || 3500000;
        self.inputs.objectPrice.value = parseInt(self.sliders.priceRange.dataset.end).toFixed(0) || 35000000;

        //creditTerm dataset
        self.params.creditTerm.min = parseInt(self.sliders.dateRange.dataset.min) || 1;
        self.params.creditTerm.max = parseInt(self.sliders.dateRange.dataset.max) || 30;
        self.inputs.creditTerm.value = parseInt(self.sliders.dateRange.dataset.start) || 20;

        //interestRate dataset
        self.params.interestRate.min = parseFloat(self.sliders.percentRange.dataset.min) || 1;
        self.params.interestRate.max = parseFloat(self.sliders.percentRange.dataset.max) || 20;
        self.inputs.interestRate.value = parseFloat(self.sliders.percentRange.dataset.start) || 7;
    };

    this.createSliders = function() {
        noUiSlider.create(
            self.sliders.priceRange,
            {
                start    : [self.inputs.firstPay.value, self.inputs.objectPrice.value],
                connect  : [false, true, false],
                margin   : 100000,
                range    : {
                    'min' : [self.params.price.min],
                    'max' : [self.params.price.max]
                },
                step     : 1000,
                tooltips : [true, true],
                pips     : {
                    mode: 'positions',
                    values: [0, 100],
                    density: 3,
                    format: wNumb({
                        thousand : ' ',
                        decimals : 0
                    }),
                },
                format   : wNumb({
                    thousand : ' ',
                    decimals : 0
                })
            }
        );

        noUiSlider.create(
            self.sliders.dateRange,
            {
                start    : [self.inputs.creditTerm.value],
                connect  : [true, false],
                range    : {
                    'min' : [self.params.creditTerm.min],
                    'max' : [self.params.creditTerm.max]
                },
                step     : 1,
                tooltips : [true],
                pips     : {
                    mode: 'positions',
                    values: [0, 32, 66, 100],
                    density: 3,
                },
                format   : wNumb({
                    thousand : ' ',
                    decimals : 0
                })
            }
        );

        noUiSlider.create(
            self.sliders.percentRange,
            {
                start    : [self.inputs.interestRate.value],
                connect  : [true, false],
                range    : {
                    'min' : [self.params.interestRate.min],
                    'max' : [self.params.interestRate.max]
                },
                step     : 0.1,
                tooltips : [true],
                pips     : {
                    mode: 'positions',
                    values: [0, 33, 66, 100],
                    density: 3,
                },
                format   : wNumb({
                    thousand : ' ',
                    decimals : 1
                })
            }
        );
    };

    this.registerEvents = function() {

        var moneyFormat = wNumb({
            mark     : '',
            thousand : ' '
        });

        //slider events
        self.sliders.priceRange.noUiSlider.on('update', function(formatValues, handle, values) {
            const start = (values[0] * 1).toFixed(0)
            const end = (values[1] * 1).toFixed(0)
            // console.log( moneyFormat.to(+start), end)
            self.inputs.firstPay.value = moneyFormat.to(+start);
            self.inputs.objectPrice.value = moneyFormat.to(+end);

            self.inputs.firstPay.setAttribute('data-price', start);
            self.inputs.objectPrice.setAttribute('data-price', end);
            
            // const start = (values[0] * 1).toFixed(0)
            // const end = (values[1] * 1).toFixed(0)
            // console.log( moneyFormat.to(+start), end)
            // self.inputs.firstPay.value = start;
            // self.inputs.objectPrice.value = end;
            updateCreditValue(self);
        });
        self.sliders.dateRange.noUiSlider.on('update', function(formatValues, handle, values) {
            self.inputs.creditTerm.value = (values[0]).toFixed(0);
            $('.js-calculate').click();
        });
        self.sliders.percentRange.noUiSlider.on('update', function(formatValues, handle, values) {
            self.inputs.interestRate.value = parseFloat((values[0]).toFixed(1));
            $('.js-calculate').click();
        });

        //input events
        self.inputs.firstPay.onchange = function(e) {
            self.validateMultiplicity(e.target);
            self.validateMinMax(e.target);
            updateCreditValue(self);
        };
        self.inputs.firstPay.oninput = function(e) {
            self.sliders.priceRange.noUiSlider.set([ e.target.value , self.inputs.objectPrice.getAttribute('data-price') ]);
            updateCreditValue(self);
        };

        self.inputs.objectPrice.onchange = function(e) {
            self.validateMultiplicity(e.target);
            self.validateMinMax(e.target);
            updateCreditValue(self);
        };

        //-------------
        self.inputs.objectPrice.oninput = function(e) {
            self.sliders.priceRange.noUiSlider.set([ self.inputs.firstPay.getAttribute('data-price'), e.target.value ]);
        };

        self.inputs.creditTerm.onchange = function(e) {
            self.validateMinMax(e.target);
        };
        self.inputs.creditTerm.oninput = function(e) {
            self.sliders.dateRange.noUiSlider.set([ e.target.value ]);
            updateCreditValue(self);
        };

        self.inputs.interestRate.onchange = function(e){
            self.validateMinMax(e.target);
        };
        self.inputs.interestRate.oninput = function(e) {
            self.sliders.percentRange.noUiSlider.set([ e.target.value ]);
            updateCreditValue(self);
        };

        //calc button
        self.form.querySelector(".js-calculate").addEventListener('click', function () {
            self.payment = self.calculate();

            var paymentDiv = document.querySelector(".js-calc-result");
            paymentDiv.classList.remove("hidden");
            paymentDiv.querySelector(".js-calc-value").innerHTML =  self.moneyFormat.to( self.payment );

            if (AB === 'A')
            {
                ga('send', 'event', 'Knopka', 'calculate_ipoteka');
                yaCounter17758231.reachGoal('calculate_ipoteka', function (){});
            }
        });
    };

    self.validateMinMax = function(target) {
        var value = parseFloat(target.value);
        if (value > self.params[ target.dataset.ref ].max || isNaN(value)) {
            target.value = self.params[ target.dataset.ref ].max;
        }
        if (value < self.params[ target.dataset.ref ].min || isNaN(value)) {
            target.value = self.params[ target.dataset.ref ].min;
        }
    };

    self.validateMultiplicity = function(target) {
        var value = parseInt(target.value);
        target.value = value / 5000  * 5000;
    };

    self.calculate = function() {
        var values = {
            creditSum    : (parseInt(self.inputs.objectPrice.getAttribute('data-price')) - parseInt(self.inputs.firstPay.getAttribute('data-price'))).toFixed(0),
            creditTerm   : parseInt(self.inputs.creditTerm.value).toFixed(0),
            interestRate : (parseFloat(self.inputs.interestRate.value) / 100).toFixed(0)
        };

        // return Math.ceil( values.creditSum * ( ( values.interestRate / 12 ) / ( 1 - Math.pow( ( 1 + ( values.interestRate / 12 ) ), -( ( values.creditTerm * 12 ) - 2 ) ) ) ) );

        /*подсчет не совпадал с подсчетом в .php
        * сделал другой вариант*/
        var percent = self.inputs.interestRate.value,
            mount = values.creditTerm*12,
            summa = values.creditSum;

        var $i = percent/12/100;

        // аннуитетный коэффициент
        var $K = $i * (1 + $i)**mount / ((1 + $i)**mount - 1);
        return $K*summa;
    };

    function updateCreditValue(self) {
        var credit = parseInt(self.inputs.objectPrice.getAttribute('data-price')) - parseInt(self.inputs.firstPay.getAttribute('data-price'));
        document.querySelector(".js-credit-value").innerHTML = self.moneyFormat.to( credit );
        document.querySelector(".js-credit").classList.remove("hidden");
        $('.js-calculate').click();
    };

    self.setValues();
    self.createSliders();
    self.registerEvents();
    updateCreditValue(self);
};

var MCalc = new MortgageCalculator('mortgageCalculator');
    }
}

</script>

<template>
    <div class="form mortgage-calculator " id="mortgageCalculator">
        <!-- <vue-slider
            :min="100000"
            :max="60000000"
            :tooltip="'always'"
            v-model="sliderRange">
        </vue-slider> -->
        <!-- <veeno
            connect
            :tooltips="[true, true]"
            :handles="[2000, 2650]"
            :range = "{
              'min': 1300,
              'max': 3250
            }"
        /> -->
        <div class="in">
            <div class="mortgage-wrap">
            <div class="mortgage-sliders">
                <div class="mortgage-calculator__fieldset mortgage-calculator__fieldset_price">

                    <div class="mortgage-calculator__input mortgage-calculator__input_first-price">
    <!--                     <label for="firstPay" class="form_label mortgage-calculator__label">Первоначальный взнос, &#8381;</label> -->
                        <label for="firstPay" class="form_label mortgage-calculator__label">Первоначальный взнос/Стоимость объекта</label>
                        <div class="db-inputs">
                            <input id="firstPay" class="form_inputtext form_inputtext_digits" type="tel" data-ref="price" name="" value=""/>
                            /
                            <input id="objectPrice" class="form_inputtext form_inputtext_digits" type="tel" data-ref="price" name="" value=""/>
                        </div>
                    </div>

    <!--                 <div class="mortgage-calculator__input">
                        <label for="objectPrice" class="form_label mortgage-calculator__label">Стоимость объекта, &#8381;</label>
                        <input id="objectPrice" class="form_inputtext form_inputtext_digits" data-ref="price" name="" value=""/>
                    </div> -->

                    <div class="range-slider mortgage-calculator__range" id="priceRange" data-start="100" data-end="2000000" ></div>
                </div>
                <div class="mortgage-calculator__fieldset mortgage-calculator__fieldset_credit-term">
                    <div class="mortgage-calculator__input">
                        <label for="creditTerm" class="form_label mortgage-calculator__label">Срок, лет</label>
                        <input id="creditTerm" class="form_inputtext form_inputtext_digits" type="tel" data-ref="creditTerm" name="" value=""/>
                    </div>

                    <div class="range-slider mortgage-calculator__range" id="dateRange" data-start="30"></div>
                </div>
                <div class="mortgage-calculator__fieldset mortgage-calculator__fieldset_price_interest-rate">
                    <div class="mortgage-calculator__input">
                        <label for="interestRate" class="form_label mortgage-calculator__label">Процентная ставка, %</label>
                        <input id="interestRate" class="form_inputtext form_inputtext_float-digits" type="tel" data-ref="interestRate" name="" value=""/>
                    </div>

                    <div class="range-slider mortgage-calculator__range" id="percentRange" data-start="8" ></div>
                </div>
            </div>

            <div class="mortgage-results">
                <div class="mortgage-calculator__credit js-credit">
                    <small>Размер кредита</small>
                    <b><span class="mortgage-calculator__credit-value js-credit-value"></span> &#8381;</b>
                </div>




                <div class="mortgage-calculator__summary">
                    <span class="button button-blue mortgage-calculator__calc js-calculate hidden">Рассчитать</span>
                    <div class="mortgage-calculator__result js-calc-result">
                        <small>Ваш ежемесячный платеж составит:</small> <span class="js-calc-value"></span> <small>&#8381;/мес.</small>
                    </div>
                </div>
                <div class="small-form">
                    <p><b>Оставить завку</b></p>
                    <p>Профессионально и надежно оформим ипотечную сделку от 0 руб.</p>
                    <form action="">
                        <div class="small-form__box">
                            <div class="form-input">
                            <label> 
                                <input class="u-full-width" name="phone_calculator" type="text" placeholder="Телефон"
                                        v-mask="'+7(###)-###-####'"
                                        v-model="myInputModel">
                                <!-- <span class="">Телефон</span> -->
                            </label>
                        </div>
                        <button><i class="my-icon icon-arr-btn "></i></button>
                        </div>
                        <div class="small-form-checkbox">
                          <div class="form-checkbox">
                                <label>
                                    <div class="checkbox">
                                      <input type="checkbox" name="agree" checked="checked" required="required">
                                      <span></span>
                                    </div>
                                    <div class="checkbox-text">Даю согласие на обработку персональных данных в соответствии с <a href="some.com">обработку персональных данных</a> </div>
                                </label>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
