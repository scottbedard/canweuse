<template>
    <section>
        <ol>
            <li>Navigate to the main <a href="https://www.google.com/analytics/web" target="_blank">Google Analytics site</a> and select the property you wish to track.</li>
            <li>Click the <strong>Admin main menu</strong> tab at the top and select the <strong>Property > User Management</strong> menu item.</li>
            <li>Paste the email address from your clipboard in to the <strong>Add permissions for</strong> field.</li>
            <li>Set the permissions to <strong>Read &amp; Analyse</strong>, and click <strong>Add</strong>.</li>
            <li>Click the <strong>Admin</strong> main menu tab again and select <strong>View > View Settings</strong>.</li>
            <li>Copy the <strong>View ID</strong> to your clipboard, you'll need it for the next step.</li>
        </ol>
        <div class="guide-nav">
            <a v-link="{ name: 'projects-create-step-1' }" class="btn btn-outlined-black">
                <i class="fa fa-angle-left"></i>
                <span>Go Back</span>
            </a>
            <a v-link="{ name: 'projects-create-step-3' }" class="btn btn-outlined-black">
                <span>Next</span>
                <i class="fa fa-angle-right"></i>
            </a>
        </div>
    </section>
</template>
