import type { IChecklistGroupItem } from "../_checklist/interfaces/i-checklist-group-item";

const check1: IChecklistGroupItem = {
	id: 1,
	order: 1,
	title: "ساختار رزومه",
	desc: <div>آیا یکی از ۳ ساختار استاندارد تعریف شده رزومه استفاده کردید؟</div>,
	note: (
		<div>
			<p>
				اطلاعات تماس، خلاصه همیشه اول هست. در انتها هم همیشه تحصیلات و سایر
				اطلاعات اختیاری قرار میگیره
			</p>
			<p>بسته به ساختار انتخابی شما اندازه بخش مهارت‌ها و جای اون تغییر میکنه</p>
			<ul>
				<li>فرمت رزومه زمانی</li>
				<li>فرمت رزومه کاربردی</li>
				<li>فرمت رزومه ترکیبی</li>
			</ul>
		</div>
	),
	reference: "/fa/resume/template",
	passedNote: "عالبه، قدم اول رو درست برداشتی",
	failedNote: "خیلی مهمه که ساختار رزومه استاندارد باشه",
};

const check2: IChecklistGroupItem = {
	id: 2,
	order: 2,
	title: "بخش اطلاعات تماس",
	desc: "آیا بخش اطلاعات تماس در بالای صفحه قرار داره؟",
	passedNote: "ایول!",
	failedNote: "بخش اطلاعات تماست رو منتقل کن به بالای صفحه",
	status: "failed",
};

const check3: IChecklistGroupItem = {
	id: 3,
	order: 3,
	title: "بخش خلاصه",
	desc: "آیا بخش خلاصه بعد از اطلاعات تماس تو رزومه قرار گرفته؟",
	status: "passed",
};

const check4: IChecklistGroupItem = {
	id: 4,
	order: 4,
	title: "بخش مهارت‌ها",
	desc: "آیا بخش مهارت‌ها قبل یا بعد از بخش تجربیات کاری قرار گرفته؟",
};

const check5: IChecklistGroupItem = {
	id: 5,
	order: 5,
	title: "بخش تجارب کاری",
	desc: "آیا بخش تجارب کاری قبل یا بعد از بخش مهارت‌ها قرار گرفته؟",
};

const check6: IChecklistGroupItem = {
	id: 6,
	order: 6,
	title: "بخش تحصیلات",
	desc: "آیا بخش تحصیلات بعد از تجارب کاری یا مهارت‌ها قرار گرفته؟",
};

const check7: IChecklistGroupItem = {
	id: 7,
	order: 7,
	title: "سایر بخش‌های اختیاری",
	desc: "آیا سایر بخش‌های اختیاری در انتهای رزومه و بعد از بخش تحصیلات قرار گرفته؟",
};

const check8: IChecklistGroupItem = {
	id: 8,
	order: 8,
	title: "آیا رزومه یک صفحه است؟",
	desc: "فقط در صورتی که بیش از ۱۰ سال سابقه و به‌هر دلیلی امکانش رو ندارید میتونید برید سراغ دو صفحه",
	note: "درباره تعداد صفحات رزومه حرف و حدیث زیاده ولی بیاین واقع بین باشیم، ۶ ثانیه وقت دارید.",
	reference: "/fa/resume/length",
};

export const resumeChecklistTemplateItems: IChecklistGroupItem[] = [
	check1,
	check2,
	check3,
	check4,
	check5,
	check6,
	check7,
	check8,
];
