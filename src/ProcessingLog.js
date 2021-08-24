import ProcessingStep from './processingStep';

function ProcessingLog({ events }) {
    return (
        <section class="text-gray-600 body-font">
            <div class="container px-5 mx-auto flex flex-wrap">
                <div class="flex flex-wrap w-full mx-auto justify-center">
                    <div class="lg:w-3/5 md:w-1/2 md:pr-10 md:py-6">
                        { events.map(e =>
                            <ProcessingStep title={e.step} description={new Date(e.time*1e3).toLocaleTimeString()}/>
                        )}
                    </div>
                </div>
            </div>
        </section> )
}

export default ProcessingLog;