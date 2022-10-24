import { ref } from "vue"
export default function UseDisc(props:any, emit:any) {
  const todos = ref<any[]>(props.todos)
  const itemId = ref<number>(1)
  const Emit = ref<any>(emit)
  
    function nextFrame(fn:any) {
        window.requestAnimationFrame(() => window.requestAnimationFrame(fn))
      }
      function int(str:string) {
        return parseInt(str, 10)
      }
      function onClick($event:any, todoId:number) {
            const targetTodo = todos.value.find(todo => todo.id == todoId)
             itemId.value =targetTodo.id
             Emit.value('elementId',itemId.value)
          }
       function   enter(el:any) {
            el.style.overflow = 'hidden'
            el.style.height = '0'
      
            nextFrame(() => {
              el.style.height = `${el.scrollHeight}px`
            })
          }
      function  leave(el:any) {
            el.style.overflow = 'hidden'
            el.style.height = `${el.scrollHeight}px`
      
            nextFrame(() => {
              el.style.height = '0'
            })
          }
      function  afterEnter(el:any) {
            el.style.height = ''
            el.style.overflow = ''
          }
      function    afterLeave(el:any) {
            el.style.height = ''
            el.style.overflow = ''
          }

          return {onClick,enter,leave,afterEnter,afterLeave,itemId}
}