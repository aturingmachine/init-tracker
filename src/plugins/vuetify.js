import Vue from 'vue'
import {
    Vuetify,
    VApp,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    transitions,
    VTextField,
    VCard,
    VAlert,
    VCheckbox,
    VBadge,
    VSelect,
    VSnackbar
} from 'vuetify'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
    components: {
        VApp,
        VBtn,
        VIcon,
        VGrid,
        VToolbar,
        transitions,
        VTextField,
        VCard,
        VAlert,
        VCheckbox,
        VBadge,
        VSelect,
        VSnackbar
    },
    iconfont: 'md',
})