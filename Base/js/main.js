
const contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('contact-name'),
    contactEmail = document.getElementById('contact-email'),
    Message = document.getElementById('message'),
    contactMessage = document.getElementById('contact-message');
    
const sendEmail = (e) => {
    e.preventDefault();

if(
    contactName.value === '' ||
    contactEmail.value === '' ||
    Message.value === ''
    )
    {
        contactMessage.classList.remove('color-light');
        contactMessage.classList.add('color-dark');


        contactMessage.textContent='write all the input fiedl';
    }
    else{
        emailjs.sendForm('service_iruk0jf','template_x9bgj55','contact-form','qSZZT8m6aLEda3Xg3')

        .then(() => {
            contactMessage.classList.add('color-light');
            contactMessage.textContent = 'Message sent ';

            setTimeout(() => {
                contactMessage.textContent = '';
            }, 5000);
        },
        (error) => {
            alert('ops! somwissue',error);
        }
        );

        contactName.value ='';
        contactEmail.value ='';
        Message.value ='';
    }
};

contactForm.addEventListener('submit',sendEmail);