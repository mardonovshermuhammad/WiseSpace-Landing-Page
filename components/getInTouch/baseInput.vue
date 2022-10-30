<script setup lang="ts">
import { ref,watch, watchEffect} from "vue";
const FurstName = ref<string>('')
const EmailValue = ref<string>('')
const NumberValue = ref<string>('')
const organition = ref<string>('')
const messages = ref<string>('')
const disabled = ref<boolean>(false)
const Items = ref<any[]>([
    { 
        wer: FurstName,
        regex: /([a-zA-Z]{3,30}\s*)+/,
        successMsg:"All is good",
        errorMsg:"text must be Full name",
        label:"Full name",
        Message: "",
        val: '',
        validate: false
        
     },
    {   
        wer: EmailValue,
        regex: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        successMsg:"All is good",
        errorMsg:"text must be email",
        label:"Email",
        Message: "",
        val: '',
        validate: false
    },
    {   
        wer: NumberValue,
        regex: /^[+]?998[012345789][0-9]{8}$/,
        successMsg:"All is good",
        errorMsg:"text must be Uzb Phone",
        label:"Phone Number",
        Message: "",
        val: '',
        validate: false
    },
    { 
        wer: organition,
        regex: /([a-zA-Z]{3,80}\s*)+/,
        successMsg:"All is good",
        errorMsg:"text must be Full name",
        label:"Organisation name",
        Message: "",
        val: '',
        validate: false
        
     },
     { 
        wer: messages,
        regex: /([a-zA-Z])+/,
        successMsg:"All is good",
        errorMsg:"text must be message",
        label:"message",
        Message: "",
        val: '',
        validate: false
        
     },
])
    watch(FurstName,()=>{
     const regex = Items.value[0].regex
       Items.value[0].val = FurstName.value
    if (FurstName.value == "") {
        Items.value[0].Message = 'this field reqired'
    }
    else if (regex.test(FurstName.value)) {
        Items.value[0].validate = true
        Items.value[0].Message = Items.value[0].successMsg
    }
    else {
        Items.value[0].validate = false
        Items.value[0].Message = Items.value[0].errorMsg

    }
})
watch(EmailValue,()=>{
     const regex = Items.value[1].regex
       Items.value[1].val = EmailValue.value
    if (EmailValue.value == "") {
        Items.value[1].Message = 'this field reqired'
    }
    else if (regex.test(EmailValue.value)) {
        Items.value[1].validate = true
        Items.value[1].Message = Items.value[1].successMsg
    }
    else {
        Items.value[1].validate = false
        Items.value[1].Message = Items.value[1].errorMsg

    }
})
watch(NumberValue,()=>{
     const regex = Items.value[2].regex
       Items.value[2].val = NumberValue.value
    if (NumberValue.value == "") {
        Items.value[2].Message = 'this field reqired'
    }
    else if (regex.test(NumberValue.value)) {
        Items.value[2].validate = true
        Items.value[2].Message = Items.value[2].successMsg
    }
    else {
        Items.value[2].validate = false
        Items.value[2].Message = Items.value[2].errorMsg

    }
})
watch(organition,()=>{
     const regex = Items.value[3].regex
       Items.value[3].val = organition.value
    if (organition.value == "") {
        Items.value[3].Message = 'this field reqired'
    }
    else if (regex.test(organition.value)) {
        Items.value[3].validate = true
        Items.value[3].Message = Items.value[3].successMsg
    }
    else {
        Items.value[3].validate = false
        Items.value[3].Message = Items.value[3].errorMsg

    }
})
watch(messages,()=>{
     const regex = Items.value[4].regex
       Items.value[4].val = messages.value
    if (messages.value == "") {
        Items.value[4].Message = 'this field reqired'
    }
    else if (regex.test(messages.value)) {
        Items.value[4].validate = true
        Items.value[4].Message = Items.value[4].successMsg
    }
    else {
        Items.value[3].validate = false
        Items.value[3].Message = Items.value[3].errorMsg

    }
})
watchEffect(()=>{
    if (Items.value[0].validate == true && Items.value[1].validate == true && Items.value[2].validate == true && Items.value[3].validate == true && Items.value[4].validate == true) {
       disabled.value = true
      }
      else{
        disabled.value = false
      }
})
function Submited() {
    console.log(FurstName.value);
    console.log(EmailValue.value);
    console.log(NumberValue.value);
    console.log(organition.value);
    console.log(messages.value);
    FurstName.value = ""
    EmailValue.value = ""
    NumberValue.value = ""
    organition.value = ""
    messages.value = ""
    
}



</script>
<template>
   <div>
    <form action="" class="w-full" @submit.prevent="Submited">
    <div  v-for="(item,i) in Items" :key="i" class="input-container mt-5 mb-5">
        <input ref="email" id="firstname" v-model="item.wer" class="input"
            :style="item.val != '' ? (item.validate ? 'border:2px solid green' : 'border:2px solid red') : item.Message = ''"
            type="text" placeholder=" "/>
        <label for="firstname" class="placeholder font-Mregular font-normal text-[15px]">{{item.label}}</label>
        <p ref="labelEmail" :style="item.validate ? 'color:green' : 'color:red'" class="text-xs z-50 absolute">{{ item.Message }}</p>
    </div>
    <div>
    <button :disabled="!disabled" :class="{'opacity-50': !disabled}" type="submit" class="bg-[#002F5F] text-white rounded-lg py-[12px] px-[30px] mt-3">Send
            message</button>
    </div>
      </form>
   </div>
</template>
<style scoped>
.input-container {
    height: 50px;
    position: relative;
    width: 100%;
}


.input {
    background-color: white;
    border-radius: 8px;
    border: 2px solid #ededed;
    box-sizing: border-box;
    color: black;
    font-size: 18px;
    height: 100%;
    outline: 0;
    padding: 4px 20px 0;
    width: 100%;
}


.input:focus {
    border: 2px solid cyan;
}

.placeholder {
    background-color: white;
    color: rgba(0, 0, 0, 0.38);
    left: 20px;
    line-height: 14px;
    pointer-events: none;
    position: absolute;
    transform-origin: 0 50%;
    transition: transform 200ms, color 200ms;
    top: 20px;
    padding-left: 5px;
    padding-right: 5px;
}

.input:focus~.placeholder,
.input:not(:placeholder-shown)~.placeholder {
    transform: translateY(-25px) translateX(-5px) scale(0.75);
}

.input:not(:placeholder-shown)~.placeholder {
    color: black;
}

.input:focus~.placeholder {
    color: black
}
</style>