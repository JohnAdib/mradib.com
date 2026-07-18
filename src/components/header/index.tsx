import { Container } from "@/components/container";
import { Avatar, AvatarContainer } from "./avatar";
import { DesktopNavigation } from "./desktop-nav";
import { MobileNavigation } from "./mobile-nav";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
	return (
		<header className="pointer-events-none sticky top-0 z-50 pt-6 pb-2 select-none">
			<Container>
				<div className="flex gap-4">
					<div className="flex flex-1">
						<AvatarContainer className="pointer-events-auto">
							<Avatar />
						</AvatarContainer>
					</div>
					<div className="flex flex-1 justify-end md:justify-center">
						<MobileNavigation className="pointer-events-auto md:hidden" />
						<DesktopNavigation className="pointer-events-auto hidden md:block" />
					</div>
					<div className="flex flex-1 justify-end">
						<div className="pointer-events-auto">
							<ThemeToggle />
						</div>
					</div>
				</div>
			</Container>
		</header>
	);
}
