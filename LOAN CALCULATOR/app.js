// Take the submit button

document.getElementById('loan-form').addEventListener('submit', function(e){

    document.getElementById('loading').style.display = 'block'
    
    
    document.getElementById('results').style.display = 'none'

    setTimeout(calculateresults , 2000);

    

    e.preventDefault();

    setTimeout(() => {
        const amount = document.getElementById('amount');
        const interest = document.getElementById('interest');
        const years = document.getElementById('years');
      
        amount.value = '';
        interest.value = '';
        years.value = '';
        
    }, 2000);
  
    

});

//Calculate Results

function calculateresults() {

    const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');




    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;

    // Compute monthly payment
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest) / (x - 1);

    if (isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);

        // Show results
        document.getElementById('results').style.display = 'block';

        // Hide loader
        document.getElementById('loading').style.display = 'none';

    } else {
        showError('Please check your numbers');
    }
}

function showError(error) {
    const sherror = document.createElement('div');
    sherror.className = 'alert alert-danger';

    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    sherror.appendChild(document.createTextNode(error));
    card.insertBefore(sherror, heading);

    document.getElementById('loading').style.display = 'none';


    

    setTimeout(clearalert, 3000);

}

function clearalert() {
    document.querySelector('.alert').remove();
}