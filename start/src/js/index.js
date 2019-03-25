mui.ajax("/findThing", {
        dataType: "json",
        type: "get",
        success: function(data) {
            if (data.code === 0) {
                render(data.data);
            }
        }
    })
    //渲染商品
function render(data) {
    var html = "";
    data.forEach(function(item) {
        html += ` <li data-id=${item._id}>
                    <p>犀牛</p>
                    <dl>
                        <dd>
                            <h6>${item.name}</h6>
                            <span>${item.content}</span>
                            <b>${item.times}</b>
                        </dd>
                        <dt>
                            <img src="img/dl.png" alt="">
                        </dt>
                    </dl>
                </li>`;
    })
    list.innerHTML = html;
}
mui("#list").on("tap", "li", function() {
    var id = this.dataset.id;
    window.location.href = "add.html?id=" + id;

})