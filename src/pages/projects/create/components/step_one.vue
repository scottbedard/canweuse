<template>
    <section>
        <ol>
            <li><a href="https://console.developers.google.com//start/api?id=analytics&amp;credential=client_key" target="_blank">Select or create the project</a> you want to cross reference with Caniuse.</li>
            <li>Open the <a href="https://console.developers.google.com/projectselector/permissions/serviceaccounts" target="_blank">Service accounts section</a>, select a project, and click <strong>Continue</strong>.
            <li>Click <strong>Create service account</strong>.</li>
            <li>Enter a <strong>Service account name</strong>, eg: "Canweuse Analytics".</li>
            <li>Select <strong>Furnish a new private key</strong>, select <strong>JSON</strong> as the key type, and click <strong>Create</strong>.</li>
            <li>Accept the download and save your private key somewhere safe and click <strong>Close</strong>.</li>
            <li>Copy the email ending with <strong>iam.gserviceaccount.com</strong> to your clipboard.</li>
        </ol>
        <div class="guide-nav">
            <a v-link="{ name: 'projects-create-step-2' }" class="btn btn-outlined-black">
                <span>Next</span>
                <i class="fa fa-angle-right"></i>
            </a>
        </div>
    </section>
</template>
