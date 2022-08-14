document.body.onload = addResumeData;

function addResumeData() {

    /*
        <header>
            <h1>Varun Dabas</h1>
            <h6>Minneapolis, MN</h6>
            <h6> varun.dabas3@gmail.com</h6>
        </header>

        <div class="container">
            <div class="dates">
                <div>03/2020 -<br> 03/2018</div>
            </div>
            <div class="info">
                <div>Recurse Center</div>
                <div>
                    <ul>
                        <li>
                            Officia nostrud duis culpa excepteur.
                        </li>
                        <li>
                            Nostrud reprehenderit qui eu eiusmod Lorem laborum elit consequat dolor.
                        </li>
                        <li>
                            Officia laboris nostrud nulla aliqua ullamco in. 
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    */

    // header data
    const page = document.getElementById('page');
    const header = document.createElement('header');

    const name = document.createElement('h1');
    name.textContent = data.name; 

    const city_email_div = document.createElement('div');
    city_email_div.className = 'city_email'
    city_email_div.innerHTML = `<span>${data.city}</span><span>${data.email}</span>`

    header.appendChild(name)
    header.appendChild(city_email_div)

    page.appendChild(header);

    // resume data
    data.jobs.forEach(job => {
        // CONTAINER DIV which contains DATE AND INFO DIV
        const container_div = document.createElement('div');
        container_div.className = 'container';

        // DATE DIV
        const dates_div = document.createElement('div');
        dates_div.className = 'dates';

        const dates_text = document.createElement('div');
        dates_text.textContent = `${job.end_date}`;
        dates_text.className = 'dates_content';
        dates_div.appendChild(dates_text);

        if (job.start_date !== undefined) {
            const vertical_span = document.createElement('div');
            vertical_span.className = 'vertical_line';
            dates_div.appendChild(vertical_span);

            const dates_text1 = document.createElement('div');
            dates_text1.textContent = `${job.start_date}`;
            dates_text1.className = 'dates_content';
            dates_div.appendChild(dates_text1);            
        }
        container_div.appendChild(dates_div);

        // INFO DIV
        let info_div = document.createElement('div');
        info_div.className = 'info';

        // INFO DIV - title 
        const title_div = document.createElement('div');
        title_div.className = 'info_title';

        const job_title_span = document.createElement('span');
        job_title_span.className = 'job_title';

        const tech_used_span = document.createElement('span');
        tech_used_span.className = 'tech_used';

        job_title_span.innerHTML = `${job.title} - <i>${job.summary}</i>`;
        tech_used_span.innerHTML = `${job.tech_used}`

        title_div.appendChild(job_title_span)
        title_div.appendChild(tech_used_span)
        info_div.appendChild(title_div)

        // INFO DIV - details
        const details_div = document.createElement('div');
        const bullets_ul = document.createElement('ul');
        job.details.forEach(detail => {
            let detail_li = document.createElement('li');
            detail_li.textContent = detail
            bullets_ul.appendChild(detail_li)            
        })
        details_div.appendChild(bullets_ul); // add bullets to details div tag
        info_div.appendChild(details_div);   // add details div to info div

        container_div.appendChild(info_div); // add info div to container
        page.appendChild(container_div);     // add container to page
    })
}