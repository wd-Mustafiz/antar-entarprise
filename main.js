const mainFrom = document.getElementById("nid-form")
const nationalIdCard = document.getElementById("nationalIdCard")
const userForm = document.getElementById("user-form")
const privew = document.getElementById("preview")

const submitForm = () => {
    //get value by users
        const bangname = document.getElementById("bangname").value
        const Ename = document.getElementById("Ename").value
        const Fname = document.getElementById("Fname").value
        const Mname = document.getElementById("Mname").value
        const village = document.getElementById("village").value
        const dhakghor = document.getElementById("dhakghor").value
        const birthdayplace = document.getElementById("birthdayplace").value
        const birthdate = document.getElementById("birthdate").value
        const idNumber = document.getElementById("idNumber").value
        const Sendingdate = document.getElementById("Sendingdate").value
        const bloodGroup = document.getElementById("bloodGroup").value

        const uploadId = document.getElementById("uploadId").files 
        const uploadSingture = document.getElementById("uploadSingture").files

        const imagePreview = document.getElementById("imagePreview")
        const signaturePreview = document.getElementById("signaturePreview")
        if(uploadId.length > 0){
            let fileReader = new FileReader()
            fileReader.onload = function (event) {
                imagePreview.setAttribute("src",event.target.result)

            }
            fileReader.readAsDataURL(uploadId[0])
        }
        if(uploadSingture.length > 0){
            let fileReader = new FileReader()
            fileReader.onload = function (event) {
                signaturePreview.setAttribute("src",event.target.result)

            }
            fileReader.readAsDataURL(uploadSingture[0])
        }
        if(bangname && Ename && Fname && Mname && village && dhakghor && birthdayplace && birthdate && idNumber && Sendingdate && bloodGroup){
            document.getElementById("banglaname").innerHTML=`<span class="filedname" style="margin-right: 12px">নাম:</span> ${bangname}`
            document.getElementById("englishname").innerHTML=`<span class="filedname">Name:</span> ${Ename}`
            document.getElementById("fathername").innerHTML=`<span class="filedname">পিতা:</span> ${Fname}`
            document.getElementById("mothername").innerHTML=`<span class="filedname">মাতা:</span> ${Mname}`
            document.getElementById("thikanaGramRasta").innerHTML=`<span class="filedname" style="font-size:10px; color:rgba(39, 39, 39, 0.678)">ঠিকানা : গ্রাম / রাস্তাঃ: ${village} , ডাকঘরঃ ${dhakghor}</span>`
            document.getElementById("blood").innerHTML = `<span class="filedname" style="font-size:12px">${bloodGroup}</span>`
            document.getElementById("dobirth").innerHTML=`<span class="filedname birthDate">Date of Birth: <span style="color: orangered;">${birthdate}</span></span>`
            document.getElementById("jonmostan").innerHTML=`<span class="filedname" style="font-size:10px;">${birthdayplace}</span>`
            document.getElementById("idNo").innerHTML=`<span class="filedname idnumber"">ID NO: <span style="color: orangered;">${idNumber}</span></span>` 
            document.getElementById("sendingText").innerHTML=`<span class="filedname" style="font-size:10px;"> ${Sendingdate}</span>`

        
            mainFrom.style.display = "none";
            nationalIdCard.style.display = "block";
            document.getElementById("downladBtn").style.display = "block";
            window.scrollTo(0, 0);
 
        }else{
            alert("hey , full fill all data input")
        }
     //showup data 
        

    
} 
