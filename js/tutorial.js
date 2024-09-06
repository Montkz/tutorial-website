class Tutorial {
    constructor(title, content) {
        this.title = title;
        this.content = content;
        this.completed = false;
    }

    markAsCompleted() {
        this.completed = true;
    }

    render() {
        const tutorialElement = document.createElement('div');
        tutorialElement.classList.add('tutorial');

        const titleElement = document.createElement('h3');
        titleElement.textContent = this.title;

        const contentElement = document.createElement('p');
        contentElement.textContent = this.content;

        const startButton = document.createElement('button');
        startButton.textContent = 'Start Tutorial';
        startButton.addEventListener('click', () => {
            alert(`Starting the "${this.title}" tutorial!`);
            // Here you would typically load the full tutorial content
        });

        tutorialElement.appendChild(titleElement);
        tutorialElement.appendChild(contentElement);
        tutorialElement.appendChild(startButton);

        return tutorialElement;
    }
}

class TutorialManager {
    constructor() {
        this.tutorials = [];
    }

    addTutorial(tutorial) {
        this.tutorials.push(tutorial);
    }

    renderAllTutorials() {
        const container = document.createElement('div');
        container.classList.add('tutorial-container');

        this.tutorials.forEach(tutorial => {
            container.appendChild(tutorial.render());
        });

        return container;
    }
}