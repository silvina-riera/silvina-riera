
const cardClick = (e) => {
    const { index } = e.currentTarget.dataset
    changeColor(e.currentTarget, index)
    selected = e.currentTarget.dataset.index
    matchCategory(selected)
    eventsAssignmentAll()
}

const eventsCleaner = (container) => 
    container.removeEventListener('click', cardClick)


const eventAssignment = (container) => 
    container.addEventListener('click', cardClick)
    

const eventsAssignmentAll = () => {

    for (let container of cardsContainer) {

        eventsCleaner(container)

        const { index } = container.dataset

        if (index !== selected) {
            eventAssignment(container)
            changeColor(container, index, true)
        }
    }
}

eventsAssignmentAll()