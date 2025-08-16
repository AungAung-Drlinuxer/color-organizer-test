import { render, screen } from "@testing-library/react";
import App, { AddColorForm, ColorList } from "./App";
import ColorProvider from './ColorProvider';

describe("<App />", () => {
  it("renders App without crashing", () => {
    render(
      <ColorProvider>
        <App />
      </ColorProvider>
    );
    // If render doesn't throw, the test passes
  });

  it("renders title", () => {
    render(
      <ColorProvider>
        <App />
      </ColorProvider>
    );
    expect(screen.getByRole('heading', { name: /color organizer/i })).toBeInTheDocument();
  });

  it("contains AddColorForm", () => {
    render(
      <ColorProvider>
        <AddColorForm />
      </ColorProvider>
    );
    expect(screen.getByRole('heading', { name: /add color/i })).toBeInTheDocument();
  });

  it("contains ColorList", () => {
    render(
      <ColorProvider>
        <ColorList />
      </ColorProvider>
    );
    // Check for at least one color box
    expect(screen.getAllByText(/of/i).length).toBeGreaterThan(0);
  });
});

// Note: ColorProvider's context logic is tested indirectly via App and component tests above.
// Direct testing of context state changes can be done with custom hooks and integration tests if needed.