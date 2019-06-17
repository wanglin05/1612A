import head from "../components/header/head"
import alertConfig from "../../src/views/home/components/alertMessage/index"
export default {
    install(Vue) {
        // alert("install");
        Vue.component("el-header", head);
        const AlertClass = Vue.extend(alertConfig);
        // console.log(AlertClass)
        Vue.prototype.$alert = (text) => {
            const AlertComponent = new AlertClass({
                propsData: {
                    text
                }
            })
        

        console.log(AlertComponent.$el);
        AlertComponent.$mount();
        document.body.appendChild(AlertComponent.$el);
    }
    }
}