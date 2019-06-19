import random
import words


def silly_string(nouns, verbs, templates):
    # Choose a random template.
    template = random.choice(templates)

    output = []
    index = 0
    position = 0
    while position < len(template):
        if template[position:position + 8] == '{{noun}}':
            output.append(random.choice(nouns))
            position += 8
        elif template[position:position + 8] == '{{verb}}':
            position += 8
        else:
            output.append(template[position])
            position += 1

    return "".join(output)


if __name__ == '__main__':
    print(silly_string(words.nouns, words.verbs,
        words.templates))
