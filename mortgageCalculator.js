'use strict';
alert(1)
var MortgageCalculator = function (formID, AB) {
    var self = this;

    $('.calc-form input[type="text"]').mask('+7(999)999-99-99');

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
        self.inputs.objectPrice.value = parseInt(self.sliders.priceRange.dataset.end) || 35000000;

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
        //slider events
        self.sliders.priceRange.noUiSlider.on('update', function(formatValues, handle, values) {
            self.inputs.firstPay.value = values[0] * 1;
            self.inputs.objectPrice.value = values[1] * 1;
            self.updateCreditValue();
        });
        self.sliders.dateRange.noUiSlider.on('update', function(formatValues, handle, values) {
            self.inputs.creditTerm.value = values[0];
            $('.js-calculate').click();
        });
        self.sliders.percentRange.noUiSlider.on('update', function(formatValues, handle, values) {
            self.inputs.interestRate.value = values[0];
            $('.js-calculate').click();
        });

        //input events
        self.inputs.firstPay.onchange = function(e) {
            self.validateMultiplicity(e.target);
            self.validateMinMax(e.target);
            self.updateCreditValue();
        };
        self.inputs.firstPay.oninput = function(e) {
            self.sliders.priceRange.noUiSlider.set([ e.target.value , self.inputs.objectPrice.value ]);
            self.updateCreditValue();
        };

        self.inputs.objectPrice.onchange = function(e) {
            self.validateMultiplicity(e.target);
            self.validateMinMax(e.target);
            self.updateCreditValue();
        };
        self.inputs.objectPrice.oninput = function(e) {
            self.sliders.priceRange.noUiSlider.set([ self.inputs.firstPay.value, e.target.value ]);
        };

        self.inputs.creditTerm.onchange = function(e) {
            self.validateMinMax(e.target);
        };
        self.inputs.creditTerm.oninput = function(e) {
            self.sliders.dateRange.noUiSlider.set([ e.target.value ]);
            self.updateCreditValue();
        };

        self.inputs.interestRate.onchange = function(e){
            self.validateMinMax(e.target);
        };
        self.inputs.interestRate.oninput = function(e) {
            self.sliders.percentRange.noUiSlider.set([ e.target.value ]);
            self.updateCreditValue();
        };

        //calc button
        self.form.querySelector(".js-calculate").addEventListener('click', function () {
            self.payment = self.calculate();

            var paymentDiv = document.querySelector(".js-calc-result");
            paymentDiv.classList.remove("hidden");
            paymentDiv.querySelector(".js-calc-value").innerHTML = self.moneyFormat.to( self.payment );

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
            creditSum    : parseInt(self.inputs.objectPrice.value) - parseInt(self.inputs.firstPay.value),
            creditTerm   : parseInt(self.inputs.creditTerm.value),
            interestRate : parseFloat(self.inputs.interestRate.value) / 100
        };

        // return Math.ceil( values.creditSum * ( ( values.interestRate / 12 ) / ( 1 - Math.pow( ( 1 + ( values.interestRate / 12 ) ), -( ( values.creditTerm * 12 ) - 2 ) ) ) ) );

        /*подсчет не совпадал с подсчетом в .php
        * сделал другой вариант*/
        var percent = self.inputs.interestRate.value,
            mount = values.creditTerm*12,
            summa = values.creditSum;

        $i = percent/12/100;

        // аннуитетный коэффициент
        var $K = $i * (1 + $i)**mount / ((1 + $i)**mount - 1);
        return $K*summa;
    };

    self.updateCreditValue = function() {
        var credit = parseInt(self.inputs.objectPrice.value) - parseInt(self.inputs.firstPay.value);
        document.querySelector(".js-credit-value").innerHTML = self.moneyFormat.to( credit );
        document.querySelector(".js-credit").classList.remove("hidden");
        $('.js-calculate').click();
    };

    self.setValues();
    self.createSliders();
    self.registerEvents();
    self.updateCreditValue();
};

var MCalc = new MortgageCalculator('mortgageCalculator');   