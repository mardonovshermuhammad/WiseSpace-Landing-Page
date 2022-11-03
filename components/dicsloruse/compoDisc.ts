import { ref } from "vue"
export default function UseDisc(props:any, emit:any) {
  const EmitImgModal = ref<any>(emit)
  const todos = ref<any[]>(props.todos)
  const itemId = ref<number>(1)
  const Emit = ref<any>(emit)
  const modal = ref<boolean>(false)
  const imgCard =ref<any[]>([
    {img: "tech1"},
    {img: "tech2"},
    {img: "tech1"},
  ])
const imgCard2 =ref<any[]>([
    {img: "student"},
    {img: "student2"},
    {img: "student"},
  ])
const imgCard3 =ref<any[]>([
    {img: "admin"},
    {img: "admin2"},
    {img: "admin"},
  ])
  
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
          function imgZoom(id:number) {
            modal.value = true
            EmitImgModal.value('modalImgs',{
              imgId: imgCard.value[id].img,
              modal: modal.value
            })
          }
          function imgZoom2(id:number) {
            modal.value = true
            EmitImgModal.value('modalImgs',{
              imgId: imgCard2.value[id].img,
              modal: modal.value
            })
          }
          function imgZoom3(id:number) {
            modal.value = true
            EmitImgModal.value('modalImgs',{
              imgId: imgCard3.value[id].img,
              modal: modal.value
            })
          }
          return {onClick,enter,leave,afterEnter,afterLeave,itemId,imgCard,imgCard2,imgCard3,imgZoom,imgZoom2,imgZoom3}
}