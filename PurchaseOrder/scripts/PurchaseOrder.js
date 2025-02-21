define("DS/PurchaseOrder/scripts/PurchaseOrder", [], function () {
    'use strict';

    var myWidget = {
        onLoad: function () {
            var formHTML = `
                <div class='main-Container' id='mainContainer' style="width: 400px; padding: 20px; background:rgb(119, 152, 242); border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); text-align: center;">
                    <h2 style="color:rgb(15, 95, 175);">Bulk Purchase Order</h2>
                    <form id="Bulk Wholesale Purchase Order">
                        <label><b>Today's Date: *</b></label>
                        <div style="display: flex; justify-content: center; gap: 5px;">
                            <input type="text" placeholder="MM" style="width: 50px;" required>
                            <input type="text" placeholder="DD" style="width: 50px;" required>
                            <input type="text" placeholder="YYYY" style="width: 80px;" required>
                        </div>
                        <label><b>E-mail: *</b></label>
                        <input type="text" placeholder="E-mail" style="width: 50%; padding: 10px; margin: 10px 0; border: 1px solid #ccc; border-radius: 5px;" required>
                        <label><b>Full Name: *</b></label>
                        <input type="email" placeholder="Full Name" style="width: 90%; padding: 10px; margin: 10px 0; border: 1px solid #ccc; border-radius: 5px;" required>
                        <label><b>Country Code: *</b></label>
                        <input type="tel" placeholder="Country Code" style="width: 20%; padding: 10px; margin: 10px 0; border: 1px solid #ccc; border-radius: 5px;" required>
                        <label><b>Item Name: *</b></label>
                        <input type="text" placeholder="Item Name" style="width: 90%; padding: 10px; margin: 10px 0; border: 1px solid #ccc; border-radius: 5px;">
                        <label><b>Quantity: *</b></label>
                        <input type="text" placeholder="Quantity" style="width: 90%; padding: 10px; margin: 10px 0; border: 1px solid #ccc; border-radius: 5px;">
                        <label><b>Item Style: *</b></label>
                        <input type="text" placeholder="Item" style="width: 90%; padding: 10px; margin: 10px 0; border: 1px solid #ccc; border-radius: 5px;">
                        <label><b>Queries: *</b></label>
                        <textarea placeholder="Type your message here" style="width: 90%; padding: 10px; margin: 10px 0; border: 1px solid #ccc; border-radius: 5px;"></textarea>
                        <button type="submit" style="background-color: #1e3a8a; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;">Submit</button>
                    </form>
                    <p id="successMessage" style="color: green; display: none;">Thanks for submitting!</p>
                </div>`;

            widget.body.innerHTML = formHTML;

            document.getElementById("Bulk Wholesale Purchase Order").addEventListener("submit", function (event) {
                event.preventDefault();
                document.getElementById("successMessage").style.display = "block";
            });
        }
    };

    widget.addEvent('onLoad', myWidget.onLoad);
});

