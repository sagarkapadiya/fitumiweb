import React from 'react'

const Benefit = () => {
    return (
        <div className='p-[0_0_80px]'>
            <div className='bg-[#EFE9FF] py-12'>
                <div className='container'>
                    <div className='text-center mb-10'>
                        <h2 className='mb-3'>Measurable Benefits & ROI</h2>
                        <p className=''>Join thousands of designers and agencies who've transformed their workflows and boosted their bottom line</p>
                    </div>
                    <div className='grid grid-cols-3 gap-5 max-[1280px]:grid-cols-2 max-[767px]:grid-cols-1'>
                        <div className='bg-white rounded-[10px] p-8 benefits-card'>
                            <div className='bg-[#4d2f8c] rounded-[8px] p-3 w-fit mb-4 group-hover:shadow-glow transition-all duration-300'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock text-primary-foreground"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                            </div>
                            <h3 className='text-xl font-semibold mb-2 text-foreground'>Design Faster</h3>
                            <p className='text-[#6b7280] mb-4'>Go from sketches and ideas to photorealistic garments in minutes. Eliminate endless sampling rounds and accelerate your go-to-market timeline.</p>
                        </div>
                        <div className='bg-white rounded-[10px] p-8 benefits-card'>
                            <div className='bg-[#4d2f8c] rounded-[8px] p-3 w-fit mb-4 group-hover:shadow-glow transition-all duration-300'>
                               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-dollar-sign text-primary-foreground"><line x1="12" x2="12" y1="2" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                            </div>
                            <h3 className='text-xl font-semibold mb-2 text-foreground'>Reduce Costs</h3>
                            <p className='text-[#6b7280] mb-4'>Cut down on expensive photoshoots, physical prototypes, and rework. Create polished, market-ready visuals at a fraction of the cost.</p>
                        </div>
                        <div className='bg-white rounded-[10px] p-8 benefits-card'>
                            <div className='bg-[#4d2f8c] rounded-[8px] p-3 w-fit mb-4 group-hover:shadow-glow transition-all duration-300'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trending-up text-primary-foreground"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
                            </div>
                            <h3 className='text-xl font-semibold mb-2 text-foreground'>Sustainable by Design</h3>
                            <p className='text-[#6b7280] mb-4'>Reduce waste by producing only what you need. With virtual sampling and AI-powered visualization, you can design responsibly and support a circular fashion future.</p>                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Benefit