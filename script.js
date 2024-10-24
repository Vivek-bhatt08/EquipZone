// let slideIndex = 0;
// showSlides(slideIndex);

// function changeSlide(n) {
//     showSlides(slideIndex += n);
// }
var a=document.querySelector("#page1")
var b=document.querySelector("#page2")
var c=document.querySelector("#page3")
var d=document.querySelector("#page4")
var tl=gsap.timeline()
a.addEventListener('mouseenter',()=>{


    tl.to("#animate1",{
        y:-300,
        duration:.5,
        scale:1
    })
})
a.addEventListener('mouseleave',()=>{

    tl.to("#animate1",{
      y:"-45%",
      duration:1,
      stagger:.2
  // scale:1.2
  })
  })
  b.addEventListener('mouseenter',()=>{

    tl.to("#animate2",{
        y:-300,
        duration:.5,
        scale:1
    })
})
b.addEventListener('mouseleave',()=>{

    tl.to("#animate2",{
      y:"-45%",
      duration:1,
      stagger:.2
  // scale:1.2
  })
  })
  c.addEventListener('mouseenter',()=>{

    tl.to("#animate3",{
        y:-300,
        duration:.5,
        scale:1
    })
})
c.addEventListener('mouseleave',()=>{

    tl.to("#animate3",{
      y:"-45%",
      duration:1,
      stagger:.2
  // scale:1.2
  })
  })
  d.addEventListener('mouseenter',()=>{

    tl.to("#animate4",{
        y:-300,
        duration:.5,
        scale:1
    })
})
d.addEventListener('mouseleave',()=>{

    tl.to("#animate4",{
      y:"-45%",
      duration:1,
      stagger:.2
  // scale:1.2
  })
  })
 

// function showSlides(n) {
//     const slides = document.querySelectorAll('.slide');
//     if (n >= slides.length) slideIndex = 0;
//     if (n < 0) slideIndex = slides.length - 1;
    
//     slides.forEach((slide, index) => {
//         slide.style.display = (index === slideIndex) ? 'block' : 'none';
//     });
// }

function searchShown(){
    let a = document.getElementById('search');
    // Toggle the display between 'none' and 'block'
    if (a.style.display === 'block') {
        a.style.display = 'none';
    } else {
        a.style.display = 'block';
    }
}





// Retrieve the logged-in user's information from localStorage
const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

// Check if a user is logged in and display their email
if (loggedInUser) {
    let a=`${loggedInUser.email}`;
    let str="";
    str+=a[0].toUpperCase();
    for(let i=1;a[i]!='@';i++)
    {
        if(isNaN(a[i]))
        str+=a[i];
    }
	window.alert(`Logged in as: ${str}`);
} else {
    // Redirect to login page if no user is logged in
    window.location.href = 'Authentication/login.html';
}


// issue form
const form = document.getElementById('equipmentForm');
        const equipmentList = document.getElementById('equipmentList');
        const emptyMessage = document.getElementById('emptyMessage');
        const issueHistory = document.getElementById('issueHistory');
        const historyMessage = document.getElementById('historyMessage');
        const deleteAllHistoryBtn = document.getElementById('deleteAllHistory');

        function updateEmptyMessage() {
            // Agr koi entry nhi hogi toh ....
            if (equipmentList.children.length === 1) { // if no entry
                emptyMessage.style.display = 'block';
                emptyMessage.style.textAlign='center';
                emptyMessage.style.padding='30px';
                emptyMessage.style.fontSize='20px';
            } else {
                emptyMessage.style.display = 'none'; //entry is present then.
            }
        }

        function updateHistoryMessage() {
            if (issueHistory.children.length === 1) { // Only the history message is present
                historyMessage.style.display = 'block';
                historyMessage.style.textAlign='center';
                historyMessage.style.padding='30px';
                historyMessage.style.fontSize='20px';
            } else {
                historyMessage.style.display = 'none';
            }
        }

        form.addEventListener('submit', function(event) {
            event.preventDefault(); // without data submit hone se rokega

            // Get the values
            const studentName = document.getElementById('studentName').value;
            const studentID = document.getElementById('studentID').value;
            const dept = document.getElementById('dept').value;
            const mobNo = document.getElementById('MobNo').value;
            const equipment = document.getElementById('equipment').value;

            // Create a new div to store the entry
            const newEntry = document.createElement('div');
            newEntry.classList.add('equipment-item');
            newEntry.className='entry-content-style';

            // Create the content for the new entry
            const entryContent = document.createElement('div');
            entryContent.innerHTML = 
            `
                <div>
                    <h5>Student Name: </h4>
                    <p>${studentName}</p>
                </div>
                <div>
                    <h5>Student Id: </h5>
                    <p>${studentID}</p>
                </div>
                <div>
                    <h5>Department: </h5>
                    <p>${dept}</p>
                </div>
                <div>
                    <h5>Mobile No.: </h5>
                    <p>${mobNo}</p>
                </div>
                <div>
                    <h5>Equipment: </h5>
                    <p>${equipment}</p>
                </div>
               `;
            entryContent.id="entryContent";


            // Create a remove button
            const removeButton = document.createElement('button');
            removeButton.classList.add('remove-btn');
            removeButton.textContent = 'Return';

            // remove krne ke liye event
            removeButton.addEventListener('click', function() {
                equipmentList.removeChild(newEntry);

                //remove hone ke baad issue history me jana
                const historyEntry = document.createElement('div');
                historyEntry.classList.add('history-item');
                historyEntry.innerHTML =
                 `
                 <strong>${studentName} (ID: ${studentID})</strong> returned <em>${equipment}</em> <br><br>
                 `;

                issueHistory.appendChild(historyEntry);

                // Update empty messages taki wo msg jo hmne dikhaye the remove ho jaye
                updateEmptyMessage();
                updateHistoryMessage();
            });

            // return items me entry or button add hoga ...
            newEntry.appendChild(entryContent);
            newEntry.appendChild(removeButton);

            // Append the new entry to the equipment list
            equipmentList.appendChild(newEntry);

            // Update empty message visibility
            updateEmptyMessage();

            //form waps empty krna
            form.reset();
        });

        // Event listener for "Delete All History" button
        deleteAllHistoryBtn.addEventListener('click', function() {
            while (issueHistory.firstChild) {
                issueHistory.removeChild(issueHistory.firstChild);
            }

            issueHistory.appendChild(historyMessage);
            updateHistoryMessage();
        });


        // jb empty hoga uske liye yha call krna
        updateEmptyMessage();
        updateHistoryMessage();
