define("DS/PurchaseOrder/scripts/PurchaseOrder", [], function () {
    'use strict';

    var myWidget = {
        onLoad: function () {
            var formHTML = `
                <div class='main-Container' id='mainContainer' style="width: 500px; padding: 20px; background:rgb(120, 182, 158); border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); text-align: center;">
                    <h2 style="color:rgb(5, 27, 22);">Bulk Wholesale Purchase Order</h2>
                    
                    <form id="purchaseOrderForm">
                        
                        <div style="display: flex; justify-content: left; gap: 5px;">
                            <label for="date"><b>Today's Date:</b></label>
                            <input type="text" id="month" placeholder="MM" style="width: 50px;" required>
                            <input type="text" id="day" placeholder="DD" style="width: 50px;" required>
                            <input type="text" id="year" placeholder="YYYY" style="width: 80px;" required>
                        </div>

                        <div style="display: flex; justify-content: left; gap: 5px;">
                            <label for="email"><b>E-mail:</b></label>
                            <input type="email" id="email" placeholder="Enter your email" style="width: 90%; padding: 10px; margin: 10px 0; border: 1px solid #ccc; border-radius: 5px;" required>
                        </div>

                        <div style="display: flex; justify-content: left; gap: 5px;">
                            <label for="fullName"><b>Full Name:</b></label>
                            <input type="text" id="fullName" placeholder="Full Name" style="width: 90%; padding: 10px; margin: 10px 0; border: 1px solid #ccc; border-radius: 5px;" required>
                        </div>

                        <div style="display: flex; justify-content: left; gap: 5px;">
                            <label for="countryCode"><b>Country Code:</b></label>
                            <input type="tel" id="countryCode" placeholder="+" style="width: 10%; padding: 10px; margin: 10px 0; border: 1px solid #ccc; border-radius: 5px;" required>
                            <label for="phoneNumber"><b>Phone Number:</b></label>
                            <input type="tel" id="phoneNumber" placeholder="Enter phone number" style="width: 80%; padding: 10px; margin: 10px 0; border: 1px solid #ccc; border-radius: 5px;" required>
                        </div>

                        <div style="display: flex; justify-content: center; gap: 5px;">
                            <label for="itemName"><b>Item Name:</b></label>
                            <input type="text" id="itemName" placeholder="Enter item name" style="width: 90%; padding: 10px; margin: 10px 0; border: 1px solid #ccc; border-radius: 5px;">
                        </div>

                        <label for="quantity"><b>Quantity:</b></label>
                        <input type="number" id="quantity" placeholder="Enter quantity" min="1" style="width: 90%; padding: 10px; margin: 10px 0; border: 1px solid #ccc; border-radius: 5px;">
                        
                        <label for="itemStyle"><b>Item Style:</b></label>
                        <input type="text" id="itemStyle" placeholder="Item Style" style="width: 90%; padding: 10px; margin: 10px 0; border: 1px solid #ccc; border-radius: 5px;">
                        
                        <label for="query"><b>Queries:</b></label>
                        <textarea id="query" placeholder="Type your message here" style="width: 90%; padding: 10px; margin: 10px 0; border: 1px solid #ccc; border-radius: 5px;"></textarea>
                        
                        <button type="submit" id="submitBtn" style="background-color:rgb(7, 59, 46); color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;">Submit</button>
                    </form>

                    <p id="successMessage" style="color: green; display: none;">Thanks for submitting!</p>
                </div>`;

            widget.body.innerHTML = formHTML;

            document.getElementById("purchaseOrderForm").addEventListener("submit", function (event) {
                event.preventDefault();
                document.getElementById("successMessage").style.display = "block";
            });
        }
    };

    widget.addEvent('onLoad', myWidget.onLoad);
});
