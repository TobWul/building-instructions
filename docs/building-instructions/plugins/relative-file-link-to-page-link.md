# Relative file link to page link

## The problem

When writing markdown documentation you create links between pages like this:

```markdown
[Link to another page](./another-page.md)
```

This is a relative link to another page in the same directory.

When rendering this markdown page we use the navigation structure used in the `nav.yml` file. This lets the user create navigation structures that are different from the folder structure. For example this projects component documentation lives with the code in the `components` folder but the rest of the documentation lives in the `docs/building-instructions` folder.

```file
components/
    Button/
        Button.tsx
        index.ts
        README.md
docs/
    building-instructions/
        plugins/
            relative-file-link-to-page-link.md
        nav.yml
```

The `nav.yml` file looks like this:

```yaml
- title: "Building instructions"
- nav:
  - "Introduction": "index.mdx"
  - "Getting Started":
    - "Installation": "installation/index.mdx"
    - "Configuration": "installation/configuration.mdx"
  - "Components":
    - "Overview": "components/index.mdx"
    - "Design tokens": "components/design-tokens.md"
    - "Components":
      - "Button": "../../components/Button/README.md"
      - "SectionTitle": "../../components/SectionTitle/README.md"
  - "Plugins":
    - "Creating a plugin": "plugins/creating-a-plugin.md"
    - "Relative File Link to Page Link": "plugins/relative-file-link-to-page-link.md"
  - "Reference":
    - "Other tools": "reference/other-tools.mdx"
    - "Remark plugins": "reference/remark-plugins.md"
```

How do we translate the relative file link to the linking structure used in the `nav.yml` file?

## The solution

## Step 1 – Find the absolute links

1. Find the absolute links of all the links in the `nav.yml` file.
2. Find the absolute links of all the links in the markdown files.

### Transform `nav.yml` file links to the absolute version

All files not starting with `../` we can append the absolute location of the `nav.yml` file as it is in the root of the docs folder.
