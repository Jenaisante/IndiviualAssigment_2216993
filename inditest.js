function myFunction() {
    const name = document.getElementById('name').value;
    const staffno = document.getElementById('staffno').value;
    const kcdio = document.getElementById('kcdio').value;
    const contact = document.getElementById('contact').value;
    const email = document.getElementById('email').value;
    const kulliyyah = document.getElementById('kulliyyah').value;
    const salary = document.getElementById('salary').value;
    const amount = document.getElementById('amount').value;
    const startdate = document.getElementById('startdate').value;
    const end = document.getElementById('end').value;
    // const currentDate = new Date();
    // const formattedDate = currentDate.toLocaleDateString();

if (name && staffno && kcdio && contact && email && kulliyyah && salary && amount && startdate && end) {
alert("Your form has been submitted.\n\nYour salary deduction will take effect from " +startdate+" until "+ end + " or further notice.\n\nThank you for your cooperation in this campaign.");
} else {
alert("Please complete all required fields before submitting the form.");
}
}
