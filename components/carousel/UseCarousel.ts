import { ref } from 'vue'
export default function Usecarousel(props:any) {
const items = ref<any[]>(props.items)
const currentOffset = ref<number>(0);
const windowSize = ref<number>(3);
const paginationFactor = ref<number>(372);
function atEndOfList() {
  return (
    currentOffset.value <=
    paginationFactor.value * -1 * (items.value.length - windowSize.value)
  );
}
function atHeadOfList() {
  return currentOffset.value === 0;
}
function mousedown(e:any) {
  console.log(e.movementX);
  
  moveCarousel(1)
}
function moveCarousel(direction: number) {
  if (direction === 1 && !atEndOfList()) {
    currentOffset.value -= paginationFactor.value;
  } else if (direction === -1 && !atHeadOfList()) {
    currentOffset.value += paginationFactor.value;
  }
}
return  { moveCarousel,atHeadOfList,currentOffset,atEndOfList,paginationFactor,mousedown }
}