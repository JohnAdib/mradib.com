import { IFaqQA } from './faq-interface';
import { FaqJsonLD } from './faq-json-ld';

export default function Faq({
  list,
}: {
  list?: IFaqQA[]
}) {
  if (!list) {
    return null;
  }

  return (
    <section className="faq mx-auto max-w-7xl py-16 lg:py-32">
      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <h2 className="text-3xl font-bold leading-10 tracking-tight">سوالات متداول</h2>
          <p className="mt-4 text-base leading-7 text-slate-500 dark:text-slate-300">
            سوال بدون جواب برات باقی مونده؟ پرسش و پاسخ رو چک کن. اگه جواب سوالت رو بازم پیدا نکردی،{' '}
            <a href="/fa/contact" className="font-semibold">با من تماس بگیر</a>.
          </p>
        </div>
        <div className="mt-10 lg:col-span-7 lg:mt-0">
          <div className="space-y-10">
            {list?.map((faq) => (
              <div id={faq.id} key={faq.id}>
                <h3 className="text-base font-semibold leading-7">{faq.q}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-00 dark:text-slate-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <FaqJsonLD faqData={list} />
    </section>
  );
}
