import { IFaqQA } from './faq-interface';

export default function Faq({
  list,
}: {
  list?: IFaqQA[]
}) {
  if (!list) {
    return null;
  }

  return (
    <div className="faq mx-auto max-w-7xl py-16 lg:py-32">
      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <h2 className="text-3xl font-bold leading-10 tracking-tight">سوالات متداول</h2>
          <p className="mt-4 text-base leading-7 ">
                سوال بدون جواب برات باقی مونده؟ پرسش و پاسخ رو چک کن. اگه جواب سوالت رو بازم پیدا نکردی،{' '}
            <a
              href="/fa/contact"
              className="font-semibold">
                  با من تماس بگیر
            </a>.
          </p>
        </div>
        <div className="mt-10 lg:col-span-7 lg:mt-0">
          <dl className="space-y-10">
            {list?.map((faq) => (
              <div id={faq.id} key={faq.id}>
                <dt className="text-base font-semibold leading-7">{faq.q}</dt>
                <dd className="mt-2 text-sm leading-7">{faq.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
