const menuBtn = document.getElementById('menu-btn');
const mobileMenuEl = document.getElementById('mobileMenu');
const selectedSeatEl = document.getElementById('selected-seat'); 
const totalBookedEl = document.getElementById('total-booked');
const availableSeatEl = document.getElementById('available-seat');
const totalPriceEl = document.getElementById('total-price');
const couponInputEl = document.getElementById('coupon-field');
const couponBtnEl = document.getElementById('coupon-btn');
const defaultTextEl = document.getElementById('default-text');
const grandTotalEl = document.getElementById('grand-total');
//Menu icon
menuBtn.addEventListener('click', function(){
  menuBtn.children[0].classList.toggle('hidden');

  const menuCloseBtn = document.getElementById('close-icon');
  menuCloseBtn.classList.toggle('hidden');
  mobileMenuEl.classList.toggle('hidden');
  mobileMenuEl.classList.toggle('flex');
})

let selectedSeat = [];
let totalPrice = 0;
function handleSelectSeat(event){
const value = event.innerText;

if(selectedSeat.includes(value)){
  return alert('Seat already Booked')
} else if(selectedSeat.length <4){
  event.classList.add('bg-primary');
  event.classList.add('text-white');
  
  selectedSeat.push(event.innerText);
  totalBookedEl.innerText = selectedSeat.length;
  
  // decrease available seat
  const availableValue =parseFloat(availableSeatEl.innerText);
  const availableSeatValue = availableValue - 1;
  availableSeatEl.innerText = availableSeatValue;


  // remove default text
  defaultTextEl.classList.add('hidden');
  
  selectedSeatEl.innerHTML += `<li class="text-base font-normal flex justify-between">
    <span>${ event.innerText }</span>
    <span>Economy</span>
    <span>550</span>
  </li>
  `
  
  //update total price
  totalPrice += 550;
  totalPriceEl.innerText = totalPrice.toFixed(2);
  
  // coupon buttons active  
  if(selectedSeat.length > 3) {
    couponInputEl.removeAttribute("disabled");
    couponBtnEl.removeAttribute("disabled");
  }
}else{
  return alert("maximum seat booked");
}
}

// coupon buttons function 
document.getElementById("coupon-btn").addEventListener("click", function(){
  const couponInputValue = couponInputEl.value;
  let couponSave = 0;

  if(couponInputValue === "NEW" || couponInputValue === "Couple 20"){
    alert("Your are coupon is not available")
    return;
  }
  if(couponInputValue === "NEW50"){
    couponSave = totalPrice * 15;
  }else if(couponInputValue === "Couple 20"){
    couponSave = totalPrice * 20;
  }

  const grandTotalValue = totalPrice - couponSave;
  grandTotalEl.innerText = grandTotalValue.toFixed(2);
})

