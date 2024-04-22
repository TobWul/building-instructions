export const frontMatterParser = (
  frontmatter: any
): {
  title: string;
  owner?: string;
} => {
  const metadata = {
    title: frontmatter.title,
    owner: frontmatter.owner,
  };
  return metadata;
};
