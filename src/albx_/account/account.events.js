var AlbanianXrm = window.AlbanianXrm || {};
(function (AlbanianXrm) {
    AlbanianXrm.account = AlbanianXrm.account || {};
    (function (account) {
        /**
         * OnLoad handler for the Account form
         * @param {Xrm.Events.EventContext} context 
         */
        account.onLoad = function (context) {
            var formContext = context.getFormContext();
            /** @type {Xrm.Attributes.StringAttribute} */
            var name =  formContext.getAttribute("name");
            console.log(name.getValue)
        }
    })(AlbanianXrm.account);
})(AlbanianXrm);