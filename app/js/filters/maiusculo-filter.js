/**
 * Created by Leandro on 09/11/2015.
 */
angular.module('validacao').filter('maiusculo', maiusculo)

function maiusculo() {
    return function (input) {
        if (input && typeof input === 'string') {
            return input.toUpperCase();
        }
        return input;
    }
}