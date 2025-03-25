document.addEventListener("DOMContentLoaded", () => {
    const columns = document.querySelectorAll(".column");

    columns.forEach(column => {
        column.addEventListener("dragover", dragOver);
        column.addEventListener("dragenter", dragEnter);
        column.addEventListener("dragleave", dragLeave);
        column.addEventListener("drop", dropTask);
    });

    let draggedTask = null;

    document.querySelectorAll(".task").forEach(task => {
        task.addEventListener("dragstart", dragStart);
        task.addEventListener("dragend", dragEnd);
    });

    function dragStart(event) {
        draggedTask = this;
        setTimeout(() => (this.style.display = "none"), 0);
    }

    function dragEnd() {
        this.style.display = "block";
        draggedTask = null;
    }

    function dragOver(event) {
        event.preventDefault();
    }

    function dragEnter(event) {
        event.preventDefault();
        this.style.background = "rgba(255, 255, 255, 0.2)";
    }

    function dragLeave() {
        this.style.background = "";
    }

    function dropTask() {
        this.style.background = "";
        if (draggedTask) {
            this.appendChild(draggedTask);
        }
    }
});
