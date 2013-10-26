"use strict";
function MockCtrl($scope)
{
    $scope.lineItems = [];
    $scope.lineItems.push(new LineItem("foo", 1, 2));
    $scope.total = 0;

    $scope.addLineItem = function()
    {
        $scope.lineItems.push(new LineItem());
    };

    $scope.calcTotal = function()
    {
        var dScope = 0;
        for (var i = 0; i < $scope.lineItems.length; i++)
        {
            dScope += $scope.lineItems[i].dHours * $scope.lineItems[i].dPrice;
        }
        $scope.total = dScope;
    };

    /*******************
     OBJECT
    *******************/
    function LineItem(strSummary, dHours, dPrice)
    {
        this.strSummary = strSummary || "";
        this.dHours = dHours || 0.00;
        this.dPrice = dPrice || 0.00;
    }
}
