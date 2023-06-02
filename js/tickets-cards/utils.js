const classes = ['estudiante__Select', 'trainee__Select', 'junior__Select', 'general__Select']

const changeColor = (container, index, revert = false) => {

    const i = Number(index)

    revert
        ? container.classList.remove(classes[i])
        : container.classList.add(classes[i])
}



const matchCategory = (selection) => {

    switch (selection) {
        case "0":
            form.category.value = 'estudiante'
            break
        case "1":
            form.category.value = 'trainee'
            break
        case "2":
            form.category.value = 'junior'
            break
        case "3":
            form.category.value = 'general'
            break
        default:
            throw new Error('Algo pasó en Match Category')
    }

    const e = new Event("change");
    const element = form.category
    element.dispatchEvent(e)

}

