import { defineAsyncComponent } from 'vue';

export default [
    {
        "title":"Profile",
        "content":defineAsyncComponent(() => import('./ProfileView.vue'))
    },
    {
        "title":"Password",
        "content":defineAsyncComponent(() => import('./PasswordView.vue'))
    },
    {
        "title":"Store Information",
        "content":defineAsyncComponent(() => import('./StoreInformation.vue'))
    },
    {
        "title":"Billing Information",
        "content":defineAsyncComponent(() => import('./BillingInformation.vue'))
    },
    {
        "title":"Invoice History",
        "content":defineAsyncComponent(() => import('./InvoiceHistory.vue'))
    }
]