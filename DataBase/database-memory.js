import { randomUUID } from 'node:crypto'

export class DatabaseMemory {
    //Map -> Modelo de dados usado para sempre requisitar -> (key, value)
    #videos = new Map()

    list(search) {
        //Array.from -> transforma informação que não é Array em Array
        return Array.from(this.#videos.entries())
            .map((videoArray) => {
                const id = videoArray[0]
                const data = videoArray[1]

                return {
                    id,
                    ...data,
                }
            })
            .filter(video => {
                if (search) {
                    return video.title.includes(search)
                }

                return true
            })
    }

    create(video) {
        //UUID => Universal Unique ID
        const videoId = randomUUID();

        this.#videos.set(videoId, video);
    }

    update(id, video) {
        this.#videos.set(id, video)
    }

    delete(id) {
        this.#videos.delete(id)
    }
}