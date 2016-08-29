(function ruPhoner() {

  'use strict';

  var RU_PHONE_LENGTH = 11;

  function filter() {
    return function ruPhonerFilter(input) {
      var phone = (input && input.toString ? input : '').toString().trim();

      if (
        phone.indexOf('7') === 0 ||
        phone.indexOf('+7') === 0 ||
        phone.indexOf('8') === 0
      ) {

        if (phone.replace(/\D/gi, '').length === RU_PHONE_LENGTH) {
          phone = phone.replace(
            /^(?:\+7|7|8)\D*(\d{3,5}\D+|\d{3})(.*)$/g,
            function buildPhone(match, region, number) {
              return [
                '+7',
                region
                  .replace(/\D/g, ''),
                number
                  .replace(/\D/g, '')
                  .replace(/^(\d{1,3})(\d{2})(\d{2})$/, '$1-$2-$3')
              ].join(' ');
            }
          );
        }
      }

      return phone;
    };
  }

  angular
    .module('altimho.ruphoner', [])
    .filter('ruphoner', filter);

})();
