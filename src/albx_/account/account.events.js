var AlbanianXrm = window.AlbanianXrm || {};
(function(AlbanianXrm){
    AlbanianXrm.account = AlbanianXrm.account || {};
    (function(account){
        account.onLoad = function(context){
            var formContext = context.getFormContext();
            var name = formContext.getAttribute("name");
        }
    })(AlbanianXrm.account);
})(AlbanianXrm);