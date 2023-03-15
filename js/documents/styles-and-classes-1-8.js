// 1

function showNotification({top = 0, right = 0, className, html}) {
    let notificationBody = document.createElement('div');

    notificationBody.classList.add(`notification`);
    className ? notificationBody.classList.add(className): null;
    
    notificationBody.style.top = `${top}px`;
    notificationBody.style.right = `${right}px`;
    notificationBody.textContent = html;

    document.body.append(notificationBody);

    setTimeout(() => notificationBody.remove(), 1500)

}