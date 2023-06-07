module.exports = function (migration) {
  const componentHeroBannerExample = migration
    .createContentType("componentHeroBannerExample")
    .name("#️⃣ Component - Hero banner example")
    .description("")
    .displayField("internalName");
  componentHeroBannerExample
    .createField("internalName")
    .name("Internal name")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  componentHeroBannerExample
    .createField("title")
    .name("Title")
    .type("Symbol")
    .localized(true)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  componentHeroBannerExample
    .createField("backgroundImage")
    .name("Background Image")
    .type("Link")
    .localized(true)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false)
    .linkType("Asset");
  componentHeroBannerExample.changeFieldControl(
    "internalName",
    "builtin",
    "singleLine",
    {}
  );
  componentHeroBannerExample.changeFieldControl(
    "title",
    "builtin",
    "singleLine",
    {}
  );
  componentHeroBannerExample.changeFieldControl(
    "backgroundImage",
    "builtin",
    "assetLinkEditor",
    {}
  );

  const page = migration
    .createContentType("page")
    .name("📜 Page")
    .description(
      "Container that enables editors to publish a page, define its slug, select & arrange its content"
    )
    .displayField("internalName");

  page
    .createField("internalName")
    .name("Internal name")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([
      {
        unique: true,
      },
    ])
    .disabled(false)
    .omitted(false);

  page
    .createField("slug")
    .name("Slug")
    .type("Symbol")
    .localized(true)
    .required(false)
    .validations([
      {
        unique: true,
      },
      {
        regexp: {
          pattern: "^([a-z0-9]+(-[a-z0-9]+)*)(\\/[a-z0-9]+(-[a-z0-9]+)*)*$",
          flags: "",
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  page
    .createField("seo")
    .name("SEO metadata")
    .type("Link")
    .localized(false)
    .required(false)
    .validations([
      {
        linkContentType: ["seo"],
      },
    ])
    .disabled(false)
    .omitted(false)
    .linkType("Entry");

  page
    .createField("pageContent")
    .name("Page content")
    .type("Link")
    .localized(false)
    .required(true)
    .validations([
      {
        linkContentType: [
          "pageContentHomeExample",
          "pageContentAboutUsExample",
          "pageContentProductsExample",
          "pageContentProductDetailsExample",
        ],
      },
    ])
    .disabled(false)
    .omitted(false)
    .linkType("Entry");

  page.changeFieldControl("internalName", "builtin", "singleLine", {});

  page.changeFieldControl("slug", "builtin", "slugEditor", {
    trackingFieldId: "internalName",
  });

  page.changeFieldControl("seo", "builtin", "entryLinkEditor", {
    helpText:
      "When the field is left empty, the page will render with default SEO tags",
    showLinkEntityAction: true,
    showCreateEntityAction: true,
  });

  page.changeFieldControl("pageContent", "builtin", "entryLinkEditor", {});
  const pageContentProductDetailsExample = migration
    .createContentType("pageContentProductDetailsExample")
    .name("💎 Page Content - Product Details Example")
    .description("")
    .displayField("internalName");
  pageContentProductDetailsExample
    .createField("internalName")
    .name("Internal name")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  pageContentProductDetailsExample
    .createField("heroBanner")
    .name("Hero banner")
    .type("Link")
    .localized(false)
    .required(false)
    .validations([
      {
        linkContentType: ["componentHeroBannerExample"],
      },
    ])
    .disabled(false)
    .omitted(false)
    .linkType("Entry");

  pageContentProductDetailsExample.changeFieldControl(
    "internalName",
    "builtin",
    "singleLine",
    {}
  );
  pageContentProductDetailsExample.changeFieldControl(
    "heroBanner",
    "builtin",
    "entryLinkEditor",
    {}
  );
  const pageContentProductsExample = migration
    .createContentType("pageContentProductsExample")
    .name("💎 Page Content - Products Example")
    .description("")
    .displayField("internalName");
  pageContentProductsExample
    .createField("internalName")
    .name("Internal name")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  pageContentProductsExample
    .createField("heroBanner")
    .name("Hero banner")
    .type("Link")
    .localized(false)
    .required(false)
    .validations([
      {
        linkContentType: ["componentHeroBannerExample"],
      },
    ])
    .disabled(false)
    .omitted(false)
    .linkType("Entry");

  pageContentProductsExample.changeFieldControl(
    "internalName",
    "builtin",
    "singleLine",
    {}
  );
  pageContentProductsExample.changeFieldControl(
    "heroBanner",
    "builtin",
    "entryLinkEditor",
    {}
  );
  const pageContentAboutUsExample = migration
    .createContentType("pageContentAboutUsExample")
    .name("💎 Page Content - About us example")
    .description("")
    .displayField("internalName");
  pageContentAboutUsExample
    .createField("internalName")
    .name("Internal name")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  pageContentAboutUsExample
    .createField("heroBanner")
    .name("Hero banner")
    .type("Link")
    .localized(false)
    .required(false)
    .validations([
      {
        linkContentType: ["componentHeroBannerExample"],
      },
    ])
    .disabled(false)
    .omitted(false)
    .linkType("Entry");

  pageContentAboutUsExample.changeFieldControl(
    "internalName",
    "builtin",
    "singleLine",
    {}
  );
  pageContentAboutUsExample.changeFieldControl(
    "heroBanner",
    "builtin",
    "entryLinkEditor",
    {}
  );
  const pageContentBase = migration
    .createContentType("pageContentBase")
    .name("💎 Page Content - Base")
    .description("")
    .displayField("internalName");
  pageContentBase
    .createField("internalName")
    .name("Internal name")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  pageContentBase.changeFieldControl(
    "internalName",
    "builtin",
    "singleLine",
    {}
  );
  const componentBase = migration
    .createContentType("componentBase")
    .name("#️⃣ Component - Base")
    .description("")
    .displayField("internalName");
  componentBase
    .createField("internalName")
    .name("Internal name")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  componentBase.changeFieldControl("internalName", "builtin", "singleLine", {});
  const pageContentHomeExample = migration
    .createContentType("pageContentHomeExample")
    .name("💎 Page Content - Home example")
    .description("")
    .displayField("internalName");
  pageContentHomeExample
    .createField("internalName")
    .name("Internal name")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  pageContentHomeExample
    .createField("components")
    .name("components")
    .type("Array")
    .localized(false)
    .required(false)
    .validations([
      {
        size: {
          max: 5,
        },
      },
    ])
    .disabled(false)
    .omitted(false)
    .items({
      type: "Link",

      validations: [
        {
          linkContentType: ["componentHeroBannerExample"],
        },
      ],

      linkType: "Entry",
    });

  pageContentHomeExample.changeFieldControl(
    "internalName",
    "builtin",
    "singleLine",
    {}
  );
  pageContentHomeExample.changeFieldControl(
    "components",
    "builtin",
    "entryLinksEditor",
    {}
  );
  const seo = migration
    .createContentType("seo")
    .name("🎛️ SEO")
    .description("Meta tags for optimizing SEO visibility")
    .displayField("name");
  seo
    .createField("name")
    .name("Internal name")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  seo
    .createField("title")
    .name("Title")
    .type("Symbol")
    .localized(true)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  seo
    .createField("description")
    .name("Description")
    .type("Symbol")
    .localized(true)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  seo.changeFieldControl("name", "builtin", "singleLine", {});

  seo.changeFieldControl("title", "builtin", "singleLine", {
    helpText: "This will override the page title in search engine results",
  });

  seo.changeFieldControl("description", "builtin", "singleLine", {
    helpText: "This will be displayed in search engine results",
  });
};
