<script setup lang="ts">
import { ref,watch, watchEffect} from "vue";
import Dropdown from '@/components/Dropdown/Dropdown.vue'
import BaseIcon from '@/components/BaseComponents/BaseIcons/BaseIcon.vue'
import country from '@/components/country/country'
import botApi from '@/plugin/botApi'
const emit = defineEmits(['close','send'])
const FurstName = ref<string>('')
const LastName = ref<string>('')
const EmailValue = ref<string>('')
const NumberValue = ref<string>('')
const Jobtitle = ref<string>('')
const messages = ref<string>('')
const Sms = ref<string>('')
const counNmae = ref<string>('')
const counNmae2 = ref<string>('')
const disabled = ref<boolean>(false)
const Items = ref<any[]>([
    { 
        wer: FurstName,
        regex: /([a-zA-Z]{3,30}\s*)+/,
        successMsg:"All is good",
        errorMsg:"text error",
        label:"First name*",
        Message: "",
        val: '',
        validate: false
        
     },
     { 
        wer: LastName,
        regex: /([a-zA-Z]{3,30}\s*)+/,
        successMsg:"All is good",
        errorMsg:"text error",
        label:"Last name*",
        Message: "",
        val: '',
        validate: false
        
     },
    {   
        wer: EmailValue,
        regex: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        successMsg:"All is good",
        errorMsg:"text error",
        label:"Work email adress*",
        Message: "",
        val: '',
        validate: false
    },
    {},
    {   
        wer: NumberValue,
        regex: /^[+]?998[012345789][0-9]{8}$/,
        successMsg:"All is good",
        errorMsg:"text error",
        label:"Phone number*",
        Message: "",
        val: '',
        validate: false
    },
    { 
        wer: Jobtitle,
        regex: /([a-zA-Z]{3,80}\s*)+/,
        successMsg:"All is good",
        errorMsg:"text error",
        label:"Job title*",
        Message: "",
        val: '',
        validate: false
        
     },
     { 
        wer: messages,
        regex: /([a-zA-Z]{3,30}\s*)+/,
        successMsg:"All is good",
        errorMsg:"text error",
        label:"School/University name*",
        Message: "",
        val: '',
        validate: false
        
     },
     {}
])
watch(FurstName,()=>{
     const regex = Items.value[0].regex
       Items.value[0].val = FurstName.value
    if (FurstName.value == "") {
        Items.value[0].Message = 'this field reqired'
    }
    else if (regex.test(FurstName.value)) {
        Items.value[0].validate = true
        Items.value[0].Message = ""
    }
    else {
        Items.value[0].validate = false
        Items.value[0].Message = Items.value[0].errorMsg

    }
})
watch(LastName,()=>{
     const regex = Items.value[1].regex
       Items.value[1].val = LastName.value
    if (LastName.value == "") {
        Items.value[1].Message = 'this field reqired'
    }
    else if (regex.test(LastName.value)) {
        Items.value[1].validate = true
        Items.value[1].Message = ""
    }
    else {
        Items.value[1].validate = false
        Items.value[1].Message = Items.value[1].errorMsg

    }
})
watch(EmailValue,()=>{
     const regex = Items.value[2].regex
       Items.value[2].val = EmailValue.value
    if (EmailValue.value == "") {
        Items.value[2].Message = 'this field reqired'
    }
    else if (regex.test(EmailValue.value)) {
        Items.value[2].validate = true
        Items.value[2].Message = ""
    }
    else {
        Items.value[2].validate = false
        Items.value[2].Message = Items.value[2].errorMsg

    }
})
watch(NumberValue,()=>{
     const regex = Items.value[4].regex
       Items.value[4].val = NumberValue.value
    if (NumberValue.value == "") {
        Items.value[4].Message = 'this field reqired'
    }
    else if (regex.test(NumberValue.value)) {
        Items.value[4].validate = true
        Items.value[4].Message = ""
    }
    else {
        Items.value[4].validate = false
        Items.value[4].Message = Items.value[4].errorMsg

    }
})
watch(Jobtitle,()=>{
     const regex = Items.value[5].regex
       Items.value[5].val = Jobtitle.value
    if (Jobtitle.value == "") {
        Items.value[5].Message = 'this field reqired'
    }
    else if (regex.test(Jobtitle.value)) {
        Items.value[5].validate = true
        Items.value[5].Message = ""
    }
    else {
        Items.value[5].validate = false
        Items.value[5].Message = Items.value[5].errorMsg

    }
})
watch(messages,()=>{
     const regex = Items.value[6].regex
       Items.value[6].val = messages.value
    if (messages.value == "") {
        Items.value[6].Message = 'this field reqired'
    }
    else if (regex.test(messages.value)) {
        Items.value[6].validate = true
        Items.value[6].Message = ""
    }
    else {
        Items.value[6].validate = false
        Items.value[6].Message = Items.value[6].errorMsg

    }
})
watchEffect(()=>{
    if (counNmae2.value !='' && counNmae.value !='' && Items.value[0].validate == true &&  
         Items.value[1].validate == true && Items.value[2].validate == true &&  
         Items.value[4].validate == true &&Items.value[5].validate == true &&  Items.value[6].validate == true) {
       disabled.value = true
      }
      else{
        disabled.value = false
      }
})
async function Submited() {
    try {
         emit('send')
        await botApi.get("sendMessage", {
            params: {
              chat_id: -897274754,
              text: `Full name: ${FurstName.value} \nLast name: ${LastName.value} \nEmail: ${EmailValue.value}  \nCountry: ${counNmae.value}  \nPhone number: ${NumberValue.value} \nJob title: ${Jobtitle.value} \nSchool/University name: ${messages.value}  \nOrganisation type: ${messages.value}  \nMessage*: ${Sms.value} `,
            },
          });
    LastName.value = ""
    FurstName.value = ""
    EmailValue.value = ""
    NumberValue.value = ""
    Jobtitle.value = ""
     counNmae2.value = ""
     messages.value = ""
     Sms.value = ""
  Items.value.forEach((e)=>{
       e.validate = false
    })
        
    } catch (error) {
     alert(error)    
    }


   
    
}
const option = ref<any[]>([
  { name:'lorem_1' },
  { name:'lorem_2' },
  { name:'lorem_3' }
])
function selectValue(value:any){
    counNmae.value = value
}
function selectValue2(value:any){
    counNmae2.value = value
}

</script>
<template>
   <div>
    <form action="" class="w-full sm:flex sm:justify-between sm:flex-wrap" @submit.prevent="Submited">
    <div  v-for="(item,i) in Items" :key="i"  class="input-container sm:mb-5 mb-3 sm:w-[45%] w-full">
        <div v-if="i !== 3 && i+1 !== Items.length"  class="w-full h-full">
            <input  id="firstname" v-model="item.wer" class="input"
              :style="item.val != '' ? (item.validate ? 'border:2px solid green' : 'border:2px solid red') : item.Message = ''"
               type="text" placeholder=" "/>
                 <BaseIcon  v-if="(i !== 3 && i+1 !== Items.length) && (item.validate)" class="Icons" name="Goodicon"></BaseIcon>
            <label  for="firstname" class="placeholder font-Mregular font-normal text-[12px]">{{item.label}}</label>
           <p  ref="labelEmail" :style="item.validate ? 'color:green' : 'color:red'" class=" toptext sm:text-xs text-[10px] z-50 absolute">{{ item.Message }}</p>
        </div>
        <div v-if="i==3" class="w-full sm:h-full h-[10px]">
          <Dropdown @selectValue="selectValue" title="Country*" :options="country.Name"></Dropdown>
        </div>  
        <div v-if="i+1==Items.length" class="w-full h-full ">
          <Dropdown  @selectValue="selectValue2" title="Organisation type" :options="option"></Dropdown>
        </div>
    </div>
    <textarea v-model="Sms"
      class="w-full sm:mb-7 mb-0 px-6 sm:h-[120px] h-[60px] sm:text-[15px] text-[12px] sm:py-[11px] py-[0px] border border-[#E3E3E3] rounded outline-none"
    ></textarea>
    <div class="flex justify-center w-full">
      <button @click.prevent="emit('close')"
        class="sm:py-2 py-2 sm:px-6 px-3 text-[14px] font-Mregular font-normal mr-5 border border-[#E3E3E3] text-[#4F4F4F] rounded-md hover:bg-blue-500 hover:text-white">
        Cancel
      </button>
      <button :disabled="!disabled" :class="{'opacity-50':!disabled}" class="py-2 text-[14px] font-Mregular font-normal px-6 text-white rounded-md bg-[#002F5F]">Send</button>
    </div>
      </form>
   </div>
</template>
<style scoped>
.input-container {
    height: 50px;
    position: relative; 
}


.input {
    background-color: white;
    border-radius: 8px;
    border: 2px solid #ededed;
    box-sizing: border-box;
    color: black;
    font-size: 15px;
    height: 100%;
    outline: 0;
    padding: 4px 20px 0;
    width: 100%;
}
.input:focus {
    border: 2px solid cyan;
 @media(max-width: 640px){
    border: 1px solid red;
}
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
    font-size: 15px;
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
.Icons{
    position: absolute;
    right: 10px;
    top: 17px;
}
@media only screen and (max-width: 640px) {
    .Icons{
    position: absolute;
    right: 10px;
    top: 3px;
}
    .input {
    border-radius: 4px;
}
.input:focus {
    border: 2px solid cyan;
}
.input-container {
    height: 25px;
    position: relative; 
}
.placeholder {
    top: 5px;
    padding-left: 0px;
    padding-right: 0px;
    font-size: 13px;
}
.input:focus~.placeholder,
.input:not(:placeholder-shown)~.placeholder {
    transform: translateY(-12px) translateX(-5px) scale(0.75);
}
.toptext{
    bottom: -12px;
}
}
</style>