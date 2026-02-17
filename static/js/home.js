document.addEventListener('DOMContentLoaded', function () {

    document.querySelectorAll('.tab-container').forEach(container => {
        const tabs = container.querySelectorAll('.tab-btn');
        const contents = container.querySelectorAll('.tab-content');

        tabs.forEach((tab, index) => {
            tab.addEventListener('click', () => {
                // Remove active from all buttons
                tabs.forEach(t => t.classList.remove('active'));
                // Remove active from all contents
                contents.forEach(c => c.classList.remove('active'));

                // Add active to clicked button
                tab.classList.add('active');
                // Show corresponding content
                contents[index].classList.add('active');
            });
        });
    });


    const tabContents = document.querySelectorAll('.tab-content');

    if (tabContents) {
        tabContents.forEach(container => {
            const createButtons = container.querySelectorAll('.create-btn');

            if (createButtons) {
                createButtons.forEach(btn => {
                    btn.addEventListener('click', () => {
                        // j button er container e modal thake, seita open hobe
                        const modal = container.querySelector('.modal');
                        if (modal) modal.classList.add('show');
                    });
                });
            }
            else {
                console.log('create btton not found')
            }
        });

    }


    function closeModal() {
        // select all modals
        const modals = document.querySelectorAll('.modal');
        if (!modals.length) return;

        modals.forEach(modal => {

            const closeBtns = modal.querySelectorAll('.modal-close-btn'); // multiple buttons
            const content = modal.querySelector('.modal-content');

            if (!content) return;

            // Close on each X button
            closeBtns.forEach(btn => {
                btn.addEventListener('click', () => modal.classList.remove('show'));
            });

            // Close on click outside modal-content
            modal.addEventListener('click', e => {
                if (!content.contains(e.target)) {
                    modal.classList.remove('show');
                }
            });

            // Prevent modal-content click from closing
            content.addEventListener('click', e => e.stopPropagation());

        });
    }

    // Initialize
    closeModal();





    const buttons = document.querySelectorAll('.list-grid-btn');

    if (buttons) {
        buttons.forEach(btn => {
            btn.addEventListener('click', function () {

                const parent = this.closest('.tab-content');

                if (!parent) { return }

                const listView = parent.querySelector('.list-view-content');
                const gridView = parent.querySelector('.grid-view-content');

                // Button active (same group only)
                parent.querySelectorAll('.list-grid-btn')
                    .forEach(b => b.classList.remove('active'));

                this.classList.add('active');

                // Show / Hide view
                if (this.classList.contains('grid-btn')) {
                    gridView.classList.add('active');
                    listView.classList.remove('active');
                } else {
                    listView.classList.add('active');
                    gridView.classList.remove('active');
                }

            });
        });
    }


})