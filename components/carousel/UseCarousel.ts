import { ref,onMounted } from 'vue'
export default function Usecarousel(props:any) {
const items = ref<any[]>(props.items)
const currentOffset = ref<number>(0);
const windowSize = ref<number>(3);
const paginationFactor = ref<number>(372);
const carouselWidth = ref<number>(3)
const caruselBtn = ref<boolean>(false)
onMounted(() => {
  if (window.innerWidth < 1280 ){
    carouselWidth.value = 2
    windowSize.value = 2
    caruselBtn.value = true
  }
  if (window.innerWidth < 830 ){
    carouselWidth.value = 1
    windowSize.value = 1
    caruselBtn.value = true
  }
  if (window.innerWidth < 640 ){
    paginationFactor.value = 320
    caruselBtn.value = true
  }
})
function atEndOfList() {
  return (
    currentOffset.value <=
    paginationFactor.value * -1 * (items.value.length - windowSize.value)
  );
}
function atHeadOfList() {
  return currentOffset.value === 0;
}
function moveCarousel(direction: number) {
  if (direction === 1 && !atEndOfList()) {
    currentOffset.value -= paginationFactor.value;
  } else if (direction === -1 && !atHeadOfList()) {
    currentOffset.value += paginationFactor.value;
  }
}
return  { moveCarousel,atHeadOfList,currentOffset,atEndOfList,paginationFactor,carouselWidth,caruselBtn }
}