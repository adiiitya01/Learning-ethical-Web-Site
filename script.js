document.addEventListener("DOMContentLoaded", function () {

    const counters = document.querySelectorAll('.counter');
    const statsSection = document.querySelector('.stats');

    let started = false;

    const startCounter = () => {
        counters.forEach(counter => {

            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const increment = target / 200;

                if (count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(updateCount, 15);
                } else {
                    counter.innerText = target;
                }
            };

            updateCount();
        });
    };

    const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && !started) {
            startCounter();
            started = true; // run only once
        }
    }, {
        threshold: 0.5
    });

    observer.observe(statsSection);

});