"use client";

import { Project } from "@/types";
import { useEffect, useState } from "react";
import { Tag, TagContainer } from "@/components/cards";
import { Icons } from "@/components/icons";

interface TagManager {
  tags: Project["tags"];
}

const DEFAULT_NUMBER_OF_TAGS = 3;
export const TagManager = ({ tags }: TagManager) => {
  const [showAll, setShowAll] = useState(false);
  const [tagAmount, setTagAmount] = useState(DEFAULT_NUMBER_OF_TAGS);
  const [tagsToRender, setTagsToRender] = useState<typeof tags | null>(null);
  const storedTags = tags;
  const handleToggleClick = () => {
    if (showAll) {
      setTagAmount(DEFAULT_NUMBER_OF_TAGS);
      setShowAll(!showAll);
    }
    if (!showAll) {
      setTagAmount(tags.length);
      setShowAll(!showAll);
    }
  };

  useEffect(() => {
    const mutableTags = [...storedTags];
    const newTags = mutableTags.splice(0, tagAmount);
    setTagsToRender(newTags);
  }, [tagAmount, storedTags, tags]);

  return (
    <TagContainer>
      {tagsToRender?.map((tag, index) => (
        <Tag key={index} tag={tag.tag} />
      ))}
      {tags.length > DEFAULT_NUMBER_OF_TAGS && (
        <button
          onClick={() => handleToggleClick()}
          className="flex items-center rounded-full bg-slate-50/50 px-2 text-xs text-slate-950 dark:bg-slate-400/50 dark:text-slate-50"
        >
          {showAll ? (
            <>
              <Icons.minus className="w-2" />
            </>
          ) : (
            <>
              <span>Vis flere</span> <Icons.plus className="w-2" />
            </>
          )}
        </button>
      )}
    </TagContainer>
  );
};
