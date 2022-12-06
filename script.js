// Mēs zinām, ka mūsu mene generation urls sastāv no 2 daļām, 
// header teksta - typed_a_url
// footer teksta - made_a_meme
// https://urlme.me/success/typed_a_url/made_a_meme.jpg

// selektējam header inputa objektu
const headerInputElementObject = document.querySelector('.js-header')
// selektējam footer inputa objektu
const footerInputElementObject = document.querySelector('.js-footer')
// selektējam pogas objektu, kas ģenerē memi
const submitButton = document.querySelector('.js-generate-meme')
// selektējam gala bildes objektu
const resultImage = document.querySelector('.js-result')

// izveidojam divus vērtību inputus, lai mēs vēlāk varētu pieglabāt šeit vērtības
let headerValue = ''
let footerValue = ''

// katru reizi kad tiek mainīts header inputs, tad daram kaut ko
headerInputElementObject.addEventListener('input', () => {
  // tas ko daram ir pieglabājam jaunāo vērtību mūsu iepriekš izveidotajā mainīgajā
  headerValue = headerInputElementObject.value
})

// katru reizi kad tiek mainīts header inputs, tad daram kaut ko
footerInputElementObject.addEventListener('input', () => {
  // tas ko daram ir pieglabājam jaunāo vērtību mūsu iepriekš izveidotajā mainīgajā
  footerValue = footerInputElementObject.value
})

// kad nospiežam generate pogu, tad daram kaut ko
submitButton.addEventListener('click', () => {
  // daram kaut ko tikai ja abiem inputiem ir vērtības
  if (headerValue && footerValue) {
    // links mums rāda, ka URL space vietā ir jālieto apakšstrīpa
    const transformedHeaderValue = headerValue.replaceAll(' ', '_')
    const transformedFooterValue = footerValue.replaceAll(' ', '_')

    // uzģenerējam jauno memi
    const memeUrl = `https://urlme.me/success/${transformedHeaderValue}/${transformedFooterValue}.jpg`

    // pieliekam jauno url mūsu HTML bildes elementam
    resultImage.src = memeUrl
  }
})
