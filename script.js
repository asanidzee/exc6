document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const accordionItem = header.parentElement;
        const accordionContent = accordionItem.querySelector('.accordion-content');


        accordionContent.style.display = accordionContent.style.display === 'block' ? 'none' : 'block';
        
        });
    });
