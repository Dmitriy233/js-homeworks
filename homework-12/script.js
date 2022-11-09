const button = document.getElementById('button');

const createTooltip = (button, text) => {
    const container = document.createElement('div');
    const rectangle = document.createElement('div');
    const arrow = document.createElement('div');
    const tooltipText = text;

    const containerCor = container.getBoundingClientRect();
    const buttonCor = button.getBoundingClientRect();

    button.classList.add('button');
    rectangle.classList.add('toolTip');
    arrow.classList.add('arrow');

    container.style.position = `relative`;
    rectangle.style.left = `${buttonCor.left - 72}px`;
    rectangle.style.top = `${buttonCor.top - 43}px`;
    arrow.style.left = `${buttonCor.left + 85}px`;
    arrow.style.top = `${buttonCor.top - 9}px`;
    container.style.left = `${containerCor.left + 100}px`;   // Двигает весь блок по оси Y;
    container.style.top = `${containerCor.top + 50}px`;      // Двигает весь блок по оси Х;

    rectangle.append(tooltipText, arrow);
    container.append(rectangle, button);

    document.body.prepend(container);


}
createTooltip(button, 'example text bla bla bla');