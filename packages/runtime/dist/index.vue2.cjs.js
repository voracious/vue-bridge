"use strict";/**
 *  Copyright 2022 Thorsten Luenborg 
 *  @license MIT
**/Object.defineProperty(exports,"__esModule",{value:!0});exports[Symbol.toStringTag]="Module";var s=require("@vue/composition-api");const o=!0,d={methods:{$_attrs(){return this.$attrs},$_listeners(){return this.$listeners},$_class(){return""},$_style(){return""},$_nativeOn(){return{}}}},l=d,a={beforeMount:"bind",beforeCreate:null,mounted:"inserted",beforeUpdate:null,update:null,updated:"componentUpdated",beforeUnMount:null,unmounted:"unbind"};function c(e){{const t={};return Object.keys(e).forEach(n=>{const r=a[n];r&&(t[r]=f(e[n]))}),t}}function f(e){return(t,n,r,i)=>{const u=r.context;return n.instance=u,e(t,n,r,i)}}function p(e){b(e.props)&&m(e.emits)&&(v(e.model),e.model={prop:"modelValue",event:"update:modelValue"})}function m(e=[]){return(Array.isArray(e)?e:Object.keys(e)).includes("update:modelValue")}function b(e={}){return Object.prototype.hasOwnProperty.call(e,"modelValue")}function v(e){if(!!e&&(e.prop!=="modelValue"||e.event!=="update:modelValue"))throw new Error("[@vue-bridge/runtime]: don't use the `model` option on components. this plugin needs to override it to ensure v-model cross-compat")}const h=e=>{e.beforeUnmount&&(e.beforeDestroy=e.beforeUnmount,delete e.beforeUnmount),e.unmounted&&(e.destroyed=e.unmounted,delete e.unmounted)},y={beforeCreate(){Object.defineProperty(this,"$bridgeSlots",{get(){return this.$scopedSlots}})}},M=e=>(typeof e=="function"&&(e={setup:e,name:e.name}),e.mixins=e.mixins||[],e.mixins.push(y),p(e),h(e),s.defineComponent(e));exports.attrsListenersMixin=l;exports.defineComponent=M;exports.defineDirective=c;exports.isVue2=o;